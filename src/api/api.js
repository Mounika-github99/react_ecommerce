import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change later for backend
});

export default api;
