import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
      }),
    }),

    getUserProfile: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
        method: "Get",
      }),
      providesTags: ["user"],
    }),

    createLink: builder.mutation({
      query: (data) => ({
        url: `/link/create-link`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteLink: builder.mutation({
      query: (id) => ({
        url: `/link/delete-link/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useGetUserProfileQuery,
  useCreateLinkMutation,
  useDeleteLinkMutation,
} = api;
