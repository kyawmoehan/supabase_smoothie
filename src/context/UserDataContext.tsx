import { createContext, useEffect, useContext, useState } from "react";
import supabase from "../config/supabaseClient";

const UserDataContext = createContext<any>(false);

export const useUserDataContext = () => {
  return useContext(UserDataContext);
};

export const UserDataProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      await supabase.auth.getUser().then((value: any) => {
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    };
    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={{ user }}>
      {children}
    </UserDataContext.Provider>
  );
};
