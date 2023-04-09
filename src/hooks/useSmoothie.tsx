import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SmoothieFormData } from "../pages/create";
import {
  createSmoothie,
  deleteSmoothie,
  fetchSmoothieData,
  fetchSmoothiesData,
  updateSmoothie,
} from "../services/supabase/SmoothieApi";

export const useSmoothiesData = (orderBy: string) => {
  return useQuery(["smoothies", orderBy], () => fetchSmoothiesData(orderBy));
};

export const useSmoothieData = (id: number) => {
  return useQuery(["smoothie", id], () => fetchSmoothieData(id));
};

export const useCreateSmoothie = () => {
  const queryClient = useQueryClient();
  return useMutation(createSmoothie, {
    onSuccess: (updateSmoothie: any) => {
      queryClient.setQueryData(["smoothies"], (oldSmoothies: any) =>
        oldSmoothies.map((oldSmoothie: any) =>
          oldSmoothie.id === updateSmoothie[0].id ? updateSmoothie : oldSmoothie
        )
      );
    },
  });
};

export const useUpdateSmoothie = () => {
  const queryClient = useQueryClient();
  return useMutation(updateSmoothie, {
    onSuccess: (newSmoothie: any) => {
      queryClient.setQueryData(["smoothie", newSmoothie[0].id], newSmoothie[0]);
    },
  });
};

export const useDeleteSmoothie = (orderBy: string) => {
  const queryClient = useQueryClient();
  return useMutation(deleteSmoothie, {
    onSuccess: (smoothie: any) => {
      queryClient.setQueryData(["smoothies", orderBy], (oldSmoothies: any) =>
        oldSmoothies.filter(
          (oldSmoothie: any) => oldSmoothie.id !== smoothie[0].id
        )
      );
    },
  });
};
