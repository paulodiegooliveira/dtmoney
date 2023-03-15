import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.afeorocket.com.br/",
  // baseURL: "http://localhost:3000/api",
});
