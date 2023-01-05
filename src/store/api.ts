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

const useFetchName = (gender: Gender) => {
  return useQuery(["names", gender], () => fetchName(gender));
};

export { useFetchName };
