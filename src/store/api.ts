import { useQuery } from "react-query";
import supabase from "../config/supabaseClient";
import { GenderType } from "../contexts/GenderContext";

const fetchRandomName = async (gender: GenderType) => {
  const response = await supabase
    .from("random_baby_names")
    .select("name")
    .eq("sex", gender)
    .limit(1)
    .single();

  return response.data;
};

const fetchName = async (id: number) => {
  // FIXME: Figure out why "random_baby_names" works, but "baby_names" doesn't
  const response = await supabase
    // .from("baby_names")
    .from("random_baby_names")
    .select("name")
    .eq("id", id)
    .limit(1)
    .single();

  return response.data;
};

const getTotalNamesAmount = async () => {
  const response = await supabase.from("amount_of_baby_names").select("*");
  return response.data;
};

const useFetchRandomName = (gender: GenderType) => {
  return useQuery(["name", gender], () => fetchRandomName(gender));
};

const useFetchName = (id: number) => {
  return useQuery(["name", id], () => fetchName(id));
};

const useGetTotalNamesAmount = () => {
  return useQuery(["namesAmount"], async () => {
    const response = await getTotalNamesAmount();
    return response[0].count;
  });
};

export { useFetchName, useFetchRandomName, useGetTotalNamesAmount };
