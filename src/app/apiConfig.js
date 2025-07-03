// src/app/apiConfig.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL, // ✅ 👈 This will be http://localhost:5000/api/
  credentials: 'include', // optional, for cookies/auth
});
