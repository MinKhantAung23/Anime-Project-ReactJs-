/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../store/features/bookmark/bookmarkSlice";

const { Meta } = Card;

const AnimeCard = ({ anime }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  const navigate = useNavigate();

  const handleNavigate = (anime) => {
    navigate(`/anime-detail/${anime.mal_id}`);
  };

  // const handleBookmarkClick = (e) => {
  //   e.stopPropagation();
  // };

  const handleBookmark = (anime) => {
    if (bookmarks.find((item) => item.mal_id === anime.mal_id)) {
      dispatch(removeBookmark(anime.mal_id));
    } else {
      dispatch(addBookmark(anime));
    }
  };

  return (
    <Card
      hoverable
      cover={
        <img alt="example" className="h-64" src={anime.images.jpg.image_url} />
      }
      style={{
        width: 230,
      }}
      className="relative overflow-hidden shadow-md h-[350px]"
      // onClick={() => handleNavigate(anime)}
    >
      <Meta
        title={anime.title_english}
        description={anime.year}
        onClick={() => handleNavigate(anime)}
      />
      <div className="absolute inset-0 bg-transparent hover:bg-black/85 px-3 py-4 flex flex-col justify-between items-start transform  transition-all duration-300 ease-in-out  text-gray-100 opacity-0 hover:opacity-100">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            {anime.title.slice(0, 50)}
          </h3>
          <small className="p-1 font-semibold bg-white text-black rounded-full border">
            <StarFilled className="text-yellow-400 me-1" />
            {anime.score ? `${anime.score}` : 0}
          </small>
          <h4 className="text-xs mt-2">
            {anime.episodes ? `${anime.episodes} Episodes ` : "Episodes ?"}
          </h4>
          <h4 className="text-xs mt-1">
            {anime.status} <span className="ms-1">| {anime.aired.string}</span>
          </h4>
          <p className="text-sm mt-3">
            {anime.synopsis ? anime.synopsis.slice(0, 120) : ""}...
          </p>
        </div>

        <div className="flex justify-evenly items-center w-full">
          <Link to={anime.trailer.embed_url} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:fill-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </Link>
          <button onClick={() => handleBookmark(anime)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 ${
                bookmarks.find((item) => item.mal_id === anime.mal_id)
                  ? "fill-red-500"
                  : "fill-blue-500"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
          <Link to={anime.url} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </Link>
          <button
            className="border p-1 text-sm rounded hover:scale-95 hover:shadow-md"
            onClick={() => handleNavigate(anime)}
          >
            details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AnimeCard;
