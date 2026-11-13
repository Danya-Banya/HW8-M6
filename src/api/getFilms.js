import { $api } from "./api";

export const getFilms = async () => {
  const response = await $api.get("/films");
  return response.data;
};
