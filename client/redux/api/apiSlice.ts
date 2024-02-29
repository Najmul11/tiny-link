import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/v1",
  }),
  tagTypes: [],
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
    }),
  }),
});

export const { useUserLoginMutation, useGetUserProfileQuery } = api;
