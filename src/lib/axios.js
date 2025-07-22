import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://backend-app-glij.onrender.com/api",  // ✅ Your live backend
  withCredentials: true,
});
