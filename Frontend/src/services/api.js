import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // altere conforme o backend
  headers: {
    "Content-Type": "application/json"
  }
});
