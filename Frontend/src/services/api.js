import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // ajuste se necessário
  headers: {
    "Content-Type": "application/json"
  }
});
