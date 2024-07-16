import { createSlice } from "@reduxjs/toolkit";

const encode = (data) => encodeURIComponent(JSON.stringify(data));
const decode = (data) => JSON.parse(decodeURIComponent(data));
const initialState = {
    bookmarks: decode(localStorage.getItem('bookmarks')) || [],
}

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark: (state, action) => {
            const bookmark = action.payload;
            state.bookmarks.push(bookmark);
            localStorage.setItem('bookmarks', encode(state.bookmarks));
        },
        removeBookmark: (state, action) => {
            state.bookmarks = state.bookmarks.filter(bookmark => bookmark.mal_id !== action.payload);
            if (state.bookmarks.length === 0) {
                localStorage.removeItem('bookmarks')
            } else {
                localStorage.setItem('bookmarks', encode(state.bookmarks));
            }

        },
    },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
