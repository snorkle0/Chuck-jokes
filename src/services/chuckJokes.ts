import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chuckJokesApi = createApi({
  reducerPath: "chuckJokesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.icndb.com/" }),
  endpoints: (builder) => ({
    getRandomJoke: builder.query({
      query: () => `jokes/random?escape=javascript?callback=`,
      transformResponse: (response: any) => response.value,
    }),
    getJokeCategories: builder.query({
      query: () => "categories",
    }),
    getImpersonatedJoke: builder.query({
      query: (name: string) =>
        `jokes/random?firstName=${name.split(" ")[0]}&lastName=${name.split(" ")[1]}`,
    }),
  }),
});

export const {
  useGetRandomJokeQuery,
  useGetJokeCategoriesQuery,
  useGetImpersonatedJokeQuery,
} = chuckJokesApi;
