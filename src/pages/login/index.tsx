import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange((event) => {
    if (event !== "SIGNED_OUT") {
      // forward to success
      navigate("/success");
    } else {
      // forward to localhost
      navigate("/");
    }
  });

  return (
    <div className="container mx-auto my-10">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        providers={["google", "facebook", "apple", "discord"]}
      />
    </div>
  );
};

export default index;
