import axios from "axios";

export const $api = axios.create({
  baseURL: "https://ghibliapi.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
});

export const getMessageError = (error) => {
  return error.data?.response?.message ?? error.message;
};
