import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getFilmById } from "../api/getFilmById";

export const useFilmById = (id) => {
  return useQuery({
    queryKey: ["films", id],
    queryFn: () => getFilmById(id),
    placeholderData: keepPreviousData,
  });
  return { data, isLoading, error };
};
