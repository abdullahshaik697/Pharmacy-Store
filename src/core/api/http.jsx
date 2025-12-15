// src/core/api/http.jsx
import axios from "axios";
import { appConfig } from "../config/appConfig"; // Fixed path

// Create axios instance
const http = axios.create({
  baseURL: appConfig.apiBaseURL, // Now matches
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ... rest of the code remains same
export default http;