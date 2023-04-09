import { useQuery } from "@tanstack/react-query";
import { fetchUserRoleData } from "../services/supabase/UserRolesApi";

export const useUserRolesData = (id: string) => {
  return useQuery(["user-role", id], () => fetchUserRoleData(id));
};
