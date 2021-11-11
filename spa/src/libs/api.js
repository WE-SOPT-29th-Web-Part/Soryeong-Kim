import axios from "axios";

export const client = axios.create({
  baseURL: "http://cherishserver.com/user/600",
  headers: {
    "Content-Type": "application/json",
  },
});
