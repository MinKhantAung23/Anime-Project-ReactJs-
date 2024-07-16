import { ApiService } from "../ApiService";

const watchVideoEndpoints = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        watchRecent: builder.query({
            query: () => "/watch/episodes",
            keepUnusedDataFor: 300,
        }),
        watchPopular: builder.query({
            query: () => "/watch/episodes/popular",
            keepUnusedDataFor: 300,
        }),
        watchTrailer: builder.query({
            query: () => `/watch/promos`,
            keepUnusedDataFor: 300,
        }),
    })
})

export const {
    useWatchRecentQuery,
    useWatchPopularQuery,
    useWatchTrailerQuery
} = watchVideoEndpoints