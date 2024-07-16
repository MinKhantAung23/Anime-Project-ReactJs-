import { ApiService } from "../ApiService";

const animesEndpoint = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        animes: builder.query({
            query: ({ page = 1, limit = 20 }) => `anime?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        topAnimes: builder.query({
            query: ({ page = 1, limit = 20 }) => `top/anime?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        seasonalAnime: builder.query({
            query: ({ page = 1, limit = 20 }) => `/seasons/now?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        upcomingAnime: builder.query({
            query: ({ page = 1, limit = 20 }) => `/seasons/upcoming?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        recommendedAnime: builder.query({
            query: () => 'recommendations/anime',
            keepUnusedDataFor: 300,
        }),
        randomAnime: builder.query({
            query: () => 'random/anime',
            keepUnusedDataFor: 300,
        }),
        getAnimeDetail: builder.query({
            query: (id) => `/anime/${id}`,
            keepUnusedDataFor: 300,
        }),
        searchAnime: builder.query({
            query: (query) => `anime?q=${query}`,
            keepUnusedDataFor: 300,
        }),
        getAnimeCharacter: builder.query({
            query: (id) => `anime/${id}/characters`,
            keepUnusedDataFor: 300,
        }),
        getAnimeStaff: builder.query({
            query: (id) => `anime/${id}/staff`,
            keepUnusedDataFor: 300,
        }),
        getTheme: builder.query({
            query: (id) => `anime/${id}/themes`,
            keepUnusedDataFor: 300,
        }),
        getAnimeEpisodes: builder.query({
            query: (id) => `anime/${id}/episodes`,
            keepUnusedDataFor: 300,
        }),
        getAnimeRecommendations: builder.query({
            query: (id) => `anime/${id}/recommendations`,
            keepUnusedDataFor: 300,
        }),
        getAnimeRelations: builder.query({
            query: (id) => `anime/${id}/relations`
        }),
    })
})

export const {
    useAnimesQuery,
    useTopAnimesQuery,
    useSeasonalAnimeQuery,
    useUpcomingAnimeQuery,
    useRecommendedAnimeQuery,
    useRandomAnimeQuery,
    useGetAnimeDetailQuery,
    useSearchAnimeQuery,
    useGetAnimeCharacterQuery,
    useGetAnimeStaffQuery,
    useGetThemeQuery,
    useGetAnimeEpisodesQuery,
    useGetAnimeRecommendationsQuery,
    useGetAnimeRelationsQuery
} = animesEndpoint;