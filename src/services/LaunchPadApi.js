import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://api.spacexdata.com/v4'

const createRequest = (url) => ({url});

export const LaunchpadApi = createApi({
    reducerPath: "LaunchpadApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getLaunchpad: builder.query({
            query: () => createRequest('/launchpads')
        })
    })
});

export const {
    useGetLaunchpad
} = LaunchpadApi;
