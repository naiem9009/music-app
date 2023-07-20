import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamAPI = createApi({
    reducerPath: 'shazamAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0f6f7f0f32msh9e02d998409501ep1595f0jsn6c870af3e264')
            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/track'})
    })
})

export const {
    useGetTopChartsQuery,
} = shazamAPI;