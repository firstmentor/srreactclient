// features/admin/adminApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://srwebconsultancy.in/api', // 🔁 LIVE URL
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
  }),
});

export const {
  useAdminLoginMutation,
  useAdminLogoutMutation,
  useGetAdminDashboardQuery,
} = adminApi;
