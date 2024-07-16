import { ApiService } from "../ApiService";

const charactersEndpoint = ApiService.injectEndpoints({
    endpoints: (builder) => ({
        charcter: builder.query({
            query: ({ page = 1, limit = 10 }) => `/top/characters?page=${page}&limit=${limit}`,
            keepUnusedDataFor: 300
        })
    })
})

export const { useCharcterQuery } = charactersEndpoint;