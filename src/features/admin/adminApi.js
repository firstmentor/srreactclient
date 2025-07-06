// features/admin/adminApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../app/apiConfig';


export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery,
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
        url: 'admin/logout',
        method: 'POST',
      }),
    }),
    getAdminDashboard: builder.query({
      query: () => 'admin/dashboard',
      providesTags: ['Admin'],
    }),
    getAdminProfile: builder.query({
      query: () => 'admin/profile',
      providesTags: ['Admin'],
    }),
    getAdminStats: builder.query({
      query: () => 'admin/stats',
    }),
    changeAdminPassword: builder.mutation({
      query: (data) => ({
        url: "admin/change-password",
        method: "PUT",
        body: data,
      }),
    }),
    // Forgot password request
    forgotAdminPassword: builder.mutation({
      query: (email) => ({
        url: "/admin/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),

    // Reset password using token
    resetAdminPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: `/admin/reset-password`,
        method: "POST",
        body: { token, newPassword },
      }),
    }),

  }),
});

export const {
  useAdminLoginMutation,
  useAdminLogoutMutation,
  useGetAdminDashboardQuery,
  useGetAdminProfileQuery,
  useGetAdminStatsQuery,
  useChangeAdminPasswordMutation,
  useForgotAdminPasswordMutation,
  useResetAdminPasswordMutation,
} = adminApi;
