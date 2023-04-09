import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useUserRolesData } from "../../hooks/useUserRoles";
import { ClipLoader } from "react-spinners";
import { useUserDataContext } from "../../context/UserDataContext";

const success = () => {
  const navigate = useNavigate();
  const { user } = useUserDataContext();
  const { isLoading, isError, error, isSuccess, data } = useUserRolesData(
    user?.id
  );

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  if (isLoading) {
    return (
      <div className="container grid w-screen h-screen mx-auto place-content-center">
        <ClipLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container grid w-screen h-screen mx-auto place-content-center">
        {/* @ts-expect-error */}
        <h1>{error.message}</h1>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="container mx-auto my-10">
      {user ? (
        <>
          <h1>Success Login</h1>
          <button
            onClick={() => signOutUser()}
            className="px-3 py-2 text-white rounded-md bg-primary"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1>User not Login</h1>
        </>
      )}
    </div>
  );
};

export default success;
