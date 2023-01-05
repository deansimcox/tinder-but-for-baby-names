import { useQuery } from "react-query";
import supabase from "../config/supabaseClient";
import { Gender } from "../contexts/GenderContext";

const fetchName = async (gender: Gender) => {
  const response = await supabase
    .from("random_baby_names")
    .select("name")
    .eq("sex", gender)
    .limit(1)
    .single();

  return response.data;
};

const getTotalNamesAmount = async () => {
  const response = await supabase.from("amount_of_baby_names").select("*");
  return response.data;
};

const useFetchRandomName = (gender: Gender) => {
  return useQuery(["names", gender], () => fetchName(gender));
};

const useGetTotalNamesAmount = () => {
  return useQuery(["namesAmount"], async () => {
    const response = await getTotalNamesAmount();
    return response[0].count;
  });
};

export { useFetchRandomName, useGetTotalNamesAmount };
