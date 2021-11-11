import axios from "axios";

export const client = axios.create({
  baseURL: "http://",
  headers: {
    "Content-Type": "application/json",
  },
});
