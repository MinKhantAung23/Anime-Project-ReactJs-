/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const Information = ({ anime }) => {
  const keys = Object.keys(anime);

  const alternativeTitle = [
    {
      key: anime.mal_id,
      label: "Alternative Titles",
      children: (
        <div>
          <ul>
            {anime.titles.map((title) => (
              <li className="text-sm mb-1" key={title.type}>
                <span className="font-semibold"> {title.type} : </span>
                <span>{title.title}</span>
              </li>
            ))}{" "}
          </ul>
        </div>
      ),
    },
  ];

  const info = [
    {
      key: anime.mal_id,
      label: "Information",
      children: (
        <div>
          <ul>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "type")} :
              </span>
              <span> {anime.type}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "episodes")} :
              </span>
              <span> {anime.episodes}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "status")} :
              </span>
              <span> {anime.status}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "aired")} :
              </span>
              <span> {anime.aired.string}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "season")} :
              </span>
              <span> {anime.season}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "broadcast")} :
              </span>
              <span> {anime.broadcast.string}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "studios")} :
              </span>
              {anime.studios.map((studio) => (
                <Link
                  to={studio.url}
                  target="'_blank"
                  className="mx-2"
                  key={studio.mal_id}
                >
                  {studio.name}
                </Link>
              ))}
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "genres")} :
              </span>
              {anime.genres.map((genre) => (
                <Link
                  to={genre.url}
                  target="'_blank"
                  className="mx-1 text-blue-400 hover:underline"
                  key={genre.mal_id}
                >
                  {genre.name}
                </Link>
              ))}
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "duration")} :
              </span>
              <span> {anime.duration}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {keys.find((key) => key === "rating")} :
              </span>
              <span> {anime.rating}</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const statistics = [
    {
      key: anime.mal_id,
      label: "Statistics",
      children: (
        <div>
          <ul>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {" "}
                {keys.find((key) => key === "score")} :{" "}
              </span>
              <span>
                {anime.score} (scored by {anime.scored_by} users)
              </span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {" "}
                {keys.find((key) => key === "rank")} :{" "}
              </span>
              <span>{anime.rank}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {" "}
                {keys.find((key) => key === "popularity")} :{" "}
              </span>
              <span>{anime.popularity}</span>
            </li>
            <li className="text-sm mb-1">
              <span className="font-semibold capitalize">
                {" "}
                {keys.find((key) => key === "favorites")} :{" "}
              </span>
              <span>{anime.favorites}</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="mb-4">
      <Collapse items={alternativeTitle} accordion ghost></Collapse>

      <Collapse items={info} accordion ghost></Collapse>

      <Collapse items={statistics} accordion ghost></Collapse>
    </div>
  );
};

export default Information;
