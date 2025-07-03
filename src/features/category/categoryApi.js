// ✅ File: src/features/category/categoryApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../app/apiConfig';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery,
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'category',
      providesTags: ['Category'],
    }),
    createCategory: builder.mutation({
      query: (formData) => ({
        url: 'createCategory',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation({
      query: ({ id, formData }) => ({
        url: `categoryUpdate/${id}`,
        method: 'PUT', // Or PATCH if your backend expects patch
        body: formData,
      }),
      invalidatesTags: ['Category'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categoryDelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation, // ✅ Exported here
  useDeleteCategoryMutation,
} = categoryApi;
