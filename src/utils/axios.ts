import axios from "axios";

const mockHostName = "http://localhost:5000/";

const axiosClient = axios.create({
  baseURL: mockHostName,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default axiosClient;
