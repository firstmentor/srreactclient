import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../app/apiConfig';


export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery,
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: 'contact',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    getContacts: builder.query({
      query: () => 'contact',
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    bulkDeleteContacts: builder.mutation({
      query: (ids) => ({
        url: 'contact/bulk-delete',
        method: 'POST',
        body: { ids },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useBulkDeleteContactsMutation
} = contactApi;
