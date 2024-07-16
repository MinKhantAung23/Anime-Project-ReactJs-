import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/ApiService";
import bookmarkReducer from "./features/bookmark/bookmarkSlice"

export const store = configureStore({
    reducer: {
        [ApiService.reducerPath]: ApiService.reducer,
        bookmarks: bookmarkReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware)
})