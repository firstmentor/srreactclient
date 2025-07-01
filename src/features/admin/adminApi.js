// features/admin/adminApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://srwebconsultancy.in/api', // 🔁 LIVE URL
    baseUrl:'https://server-y0fc.onrender.com/api',
    credentials: 'include', // ✅ cookies भेजने के लिए जरूरी
  }),
  tagTypes: ['Admin'],
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: '/admin/login',
        method: 'POST',
        body: data,
      }),
    }),
    adminLogout: builder.mutation({
      query: () => ({
        url: '/admin/logout',
        method: 'POST',
      }),
    }),
    getAdminDashboard: builder.query({
      query: () => '/admin/dashboard',
      providesTags: ['Admin'],
    }),
    getAdminProfile: builder.query({
      query: () => '/admin/profile',
      providesTags: ['Admin'],
    }),
    getAdminStats: builder.query({
      query: () => '/admin/stats',
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminLogoutMutation,
  useGetAdminDashboardQuery,
  useGetAdminProfileQuery,
  useGetAdminStatsQuery
} = adminApi;
