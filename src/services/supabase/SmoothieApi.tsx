import supabase from "../../config/supabaseClient";
import { SmoothieFormData } from "../../pages/create";

export const fetchSmoothiesData = async (orderBy: string) => {
  try {
    const { data, error } = await supabase
      .from("smoothie")
      .select()
      .order(orderBy, { ascending: false });
    if (error) throw new Error(error.message);
    return data ? data : [];
  } catch (error) {
    throw error;
  }
};

export const fetchSmoothieData = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("smoothie")
      .select()
      .eq("id", id)
      .single();
    if (error) throw new Error("Smoothie not found!");
    return data;
  } catch (error) {
    throw error;
  }
};

export const createSmoothie = async (newData: SmoothieFormData) => {
  try {
    const { data, error } = await supabase
      .from("smoothie")
      .insert([newData])
      .select();
    if (error) throw new Error(error.message);
    return data ? data : [];
  } catch (error) {
    throw error;
  }
};

export const updateSmoothie = async (newData: {
  title: string;
  method: string;
  rating: string;
  id: number;
}) => {
  try {
    const { data, error } = await supabase
      .from("smoothie")
      .update(newData)
      .eq("id", newData.id)
      .select();
    if (error) throw new Error(error.message);
    return data ? data : [];
  } catch (error) {
    throw error;
  }
};

export const deleteSmoothie = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("smoothie")
      .delete()
      .eq("id", id)
      .select();
    if (error) throw new Error(error.message);
    return data ? data : [];
  } catch (error) {
    throw error;
  }
};
