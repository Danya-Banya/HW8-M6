import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getFilms } from "../api/getFilms";

export const useFilms = () => {
  return useQuery({
    queryKey: ["films"],
    queryFn: getFilms,
    placeholderData: keepPreviousData,
  });
  return { data, isLoading, error };
};
