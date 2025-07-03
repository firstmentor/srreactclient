// src/features/job/jobOpeningsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../app/apiConfig';


export const jobOpeningsApi = createApi({
  reducerPath: 'jobOpeningsApi',
  baseQuery,
  tagTypes: ['Job'],
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => '/jobs',
      providesTags: ['Job'],
    }),
    addJob: builder.mutation({
      query: (data) => ({
        url: '/addjob',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Job'],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/job/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Job'],
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/job/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Job'],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useAddJobMutation,
  useDeleteJobMutation,
  useUpdateJobMutation,
} = jobOpeningsApi;
