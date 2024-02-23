import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    credentials: "include",
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

    getProfile: builder.query({
      query: (accessToken) => ({
        url: `/user/me`,
        method: "Get",
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
  }),
});

export const {} = api;
