/* eslint-disable no-unused-vars */
import React from "react";
import BookmarkCard from "../components/AnimeCard/BookmarkCard";
import { useSelector } from "react-redux";

const BookmarkPage = () => {
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
  // console.log(bookmarks);
  return (
    <div>
      <BookmarkCard bookmarks={bookmarks} />
    </div>
  );
};

export default BookmarkPage;
