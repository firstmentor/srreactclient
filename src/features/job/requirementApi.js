// src/features/requirement/requirementApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../app/apiConfig';


export const requirementApi = createApi({
  reducerPath: 'requirementApi',
  baseQuery,
 
  endpoints: (builder) => ({
    submitRequirement: builder.mutation({
      query: (data) => ({
        url: '/requirement',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getAllRequirements: builder.query({
      query: () => '/allrequirement',
      providesTags: ['Requirement'],
    }),
    deleteRequirement: builder.mutation({
      query: (id) => ({
        url: `/deleterequirement/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Requirement'],
    }),
  }),
});

export const { useSubmitRequirementMutation,useGetAllRequirementsQuery,useDeleteRequirementMutation } = requirementApi;
