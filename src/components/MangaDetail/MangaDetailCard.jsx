/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { StarFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../store/features/bookmark/bookmarkSlice";
import { Link } from "react-router-dom";
import MangaDetailCharacter from "./MangaDetailCharacter";
import MangaDetailRecommandation from "./MangaDetailRecommandation";

const MangaDetailCard = ({ mangaDetail }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
  const bgImage = mangaDetail?.images?.jpg.image_url;

  const handleBookmark = (mangaDetail) => {
    if (bookmarks.find((item) => item.mal_id === mangaDetail.mal_id)) {
      dispatch(removeBookmark(mangaDetail.mal_id));
    } else {
      dispatch(addBookmark(mangaDetail));
    }
  };
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative max-h-[300px] w-full bg-cover bg-center  shadow hover:shadow-md"
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="relative z-10 flex justify-center items-center p-4">
          <img
            src={mangaDetail?.images.jpg.image_url}
            alt={mangaDetail?.title}
            className="hover:rotate-6 transition-all w-40"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-8 my-4 ">
        <h1 className="text-2xl font-bold font-serif text-center">
          {mangaDetail?.title}
        </h1>
        <h4 className="text-base font-medium mt-3">
          {mangaDetail?.title_english}
        </h4>
        <h4 className="text-base font-medium mt-3">
          {mangaDetail?.title_japanese}
        </h4>
        <div className="mb-2">
          <small className="inline">
            {mangaDetail?.status} | {mangaDetail?.type}
          </small>
          <small className="ms-4">
            <StarFilled className="text-yellow-400 me-1" />
            {mangaDetail?.score}
          </small>
        </div>

        <button onClick={() => handleBookmark(mangaDetail)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 mb-4 ${
              bookmarks.find((item) => item.mal_id === mangaDetail.mal_id)
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

        <div>
          <div className="mb-4">
            <ul>
              <li className="text-sm mb-1">
                <span className="font-semibold">Author : </span>
                {mangaDetail?.authors?.map((name) => (
                  <Link
                    key={name.mal_id}
                    to={name.url}
                    target="_blank"
                    className="hover:underline hover:text-blue-400"
                  >
                    {name.name}
                  </Link>
                ))}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Voulmes :</span>{" "}
                {mangaDetail?.volumes}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Chapters :</span>{" "}
                {mangaDetail?.chapters}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Rank :</span>{" "}
                {mangaDetail?.rank}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Popularity :</span>{" "}
                {mangaDetail?.popularity}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Favorites :</span>{" "}
                {mangaDetail?.favorites}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Published :</span>{" "}
                {mangaDetail?.published.string}
              </li>

              <li className="text-sm mb-1">
                <span className="font-semibold">demographics :</span>{" "}
                {mangaDetail?.demographics.map((demo) => (
                  <Link
                    to={demo.url}
                    key={demo.mal_id}
                    className="me-2 text-blue-500 hover:underline"
                  >
                    {demo.name}
                  </Link>
                ))}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Genres :</span>{" "}
                {mangaDetail?.genres.map((gen) => (
                  <Link
                    to={gen.url}
                    key={gen.mal_id}
                    className="me-2 text-blue-500 hover:underline"
                  >
                    {gen.name}
                  </Link>
                ))}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold w-96">Background :</span>{" "}
                {mangaDetail?.background}
              </li>
              <li className="text-sm mb-1">
                <span className="font-semibold">Source :</span>{" "}
                <Link to={mangaDetail?.url} className="text-blue-400">
                  {mangaDetail?.url}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-center sm:text-start">
              Synopsis
            </h4>
            <p className="text-gray-600 mt-2 mb-4 text-justify">
              {mangaDetail?.synopsis}
            </p>
          </div>
        </div>
      </div>

      <div>
        <MangaDetailCharacter mangaDetail={mangaDetail} />
      </div>

      <div>
        <MangaDetailRecommandation mangaDetail={mangaDetail} />
      </div>
    </div>
  );
};

export default MangaDetailCard;
