// src/features/job/jobApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../app/apiConfig';


export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery,
  endpoints: (builder) => ({
    applyJob: builder.mutation({
      query: (formData) => ({
        url: 'apply',
        method: 'POST',
        body: formData,
      }),
    }),
    getApplications: builder.query({
      query: () => 'allJob',
    }),
    updateApplicationStatus: builder.mutation({
      query: ({ id, status, comment }) => ({
        url: `/application/${id}/status`,
        method: 'PUT',
        body: { status, comment },
      }),
    }),
    deleteApplication: builder.mutation({
      query: (id) => ({
        url: `/application/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useApplyJobMutation ,
  useGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
  useDeleteApplicationMutation
  
} = jobApi;
