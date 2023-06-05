import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4444/",
  timeout: 4000,
});
