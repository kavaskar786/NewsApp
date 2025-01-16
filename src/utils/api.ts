import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error", error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
