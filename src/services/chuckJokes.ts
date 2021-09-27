import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chuckJokesApi = createApi({
  reducerPath: "chuckJokesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.icndb.com/" }),
  endpoints: (builder) => ({
    getRandomJoke: builder.query({
      query: (params: any) =>
        `jokes/random${
          params.person
            ? params.person.split(" ").length > 0
              ? `?firstName=${params.person.split(" ")[0]}&lastName=${
                  params.person.split(" ")[1]
                }`
              : `?firstName=${params.person}`
            : ""
        }${params.category.length > 0 ? `?limitTo=[${params.category}]` : ""}`,
      transformResponse: (response: any) => response.value.joke,
    }),
    getJokeCategories: builder.query({
      query: () => "categories",
      transformResponse: (response: any) => response.value,
    }),
  }),
});

export const { useGetRandomJokeQuery, useGetJokeCategoriesQuery } =
  chuckJokesApi;
