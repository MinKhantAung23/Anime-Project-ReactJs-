import { ApiService } from "../ApiService";

const mangaEndpoints = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        manga: builder.query({
            query: ({ page = 1, limit = 15 }) => `manga?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        topManga: builder.query({
            query: ({ page = 1, limit = 15 }) => `/top/manga?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300,
        }),
        recommendationsManga: builder.query({
            query: "recommendations/manga",
            keepUnusedDataFor: 300,
        }),
        getMangaDetails: builder.query({
            query: (id) => `manga/${id}`,
            keepUnusedDataFor: 300,
        }),
        getMangaCharactes: builder.query({
            query: (id) => `manga/${id}/characters`,
            keepUnusedDataFor: 300
        }),
        getMangaRecommandations: builder.query({
            query: (id) => `manga/${id}/recommandations`,
            keepUnusedDataFor: 300
        }),
        searchManga: builder.query({
            query: (query) => `manga?q=${query}`,
            keepUnusedDataFor: 300,
        }),
    })
})

export const {
    useMangaQuery,
    useTopMangaQuery,
    useRecommendationsMangaQuery,
    useGetMangaDetailsQuery,
    useGetMangaCharactesQuery,
    useGetMangaRecommandationsQuery,
    useSearchMangaQuery
} = mangaEndpoints;