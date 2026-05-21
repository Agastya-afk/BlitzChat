import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "blitz-chat-xecs.vercel.app" : "/api",
  withCredentials: true,
});
