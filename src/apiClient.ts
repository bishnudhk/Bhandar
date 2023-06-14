import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/",
  headers: {
    "content-type": "application/json",
  },
});

export default apiClient;
