// src/core/api/http.js

import axios from "axios";
import { appConfig } from "../config/appConfig";

// Create axios instance
const http = axios.create({
  baseURL: appConfig.apiBaseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// === Request Interceptor ===
// Automatically attach token if present
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// === Response Interceptor ===
// Automatically format API errors
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const formattedError = {
      message:
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong, please try again.",
      status: error?.response?.status || 500,
      data: error?.response?.data || null,
    };

    // If Unauthorized → token expired/logged out
    if (formattedError.status === 401) {
      localStorage.removeItem("auth_token");
      // Optional: redirect to login
      // window.location.href = "/login";
    }

    return Promise.reject(formattedError);
  }
);

export default http;
