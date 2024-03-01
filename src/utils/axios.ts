import axios from "axios";

const mockHostName = import.meta.env.VITE_APP_API_URL;

const axiosClient = axios.create({
  baseURL: mockHostName,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default axiosClient;
