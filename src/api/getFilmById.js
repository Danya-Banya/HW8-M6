import { $api } from "./api";
export const getFilmById = async (id) => {
  const response = await $api.get(`/films/${id}`);
  return response.data;
};
