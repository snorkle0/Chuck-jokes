import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const chuckJokesApi = createApi({
    reducerPath: 'chuckJokesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.icndb.com/'}),
    endpoints: (builder) => ({
        getRandomJoke: builder.query({
            query: () => 'random'
        }),
        getJokeCategories: builder.query({
            query: () => 'categories'
        }),
        getImpersonatedJoke: builder.query({
            query: (name: string) => `random?firstName=${name.split(" ")[0]}&lastName=${name.split(" ")[1]}`
        }),
    })
})