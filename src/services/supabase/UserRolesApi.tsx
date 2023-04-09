import supabase from "../../config/supabaseClient";

export const fetchUserRoleData = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("user_role")
      .select("id, user_id,roles(*)")
      .eq("user_id", id);
    if (error) throw new Error("User Role not found!");
    return data;
  } catch (error) {
    throw error;
  }
};
