/* eslint-disable no-unused-vars */
import React from "react";
import { useRandomAnimeQuery } from "../../store/service/endpoints/animes.endpoints";
import { Link } from "react-router-dom";
import Loading from "../loader/Loading";
import { Alert, Spin } from "antd";

const RandomCard = () => {
  const { data, isLoading, error } = useRandomAnimeQuery();
  // console.log(data?.data);

  if (isLoading) return <Loading />;

  if (error)
    return (
      <Alert
        message={`Error : ${error.status}`}
        className="w-fit mx-auto my-4"
        type="error"
      />
    );
  return (
    <div
      className="my-4 border w-full h-full shadow flex px-6 py-3 flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start"
      key={data?.data?.mal_id}
    >
      <div className="w-80">
        <img
          className="h-60 w-72"
          src={data?.data.images.jpg.image_url}
          alt=""
        />
      </div>
      <div className="ms-4 flex flex-col justify-center items-center sm:items-start bg-transparent">
        <h1 className="text-xl sm:text-2xl font-bold">{data?.data.title}</h1>
        <h4 className="text-base mt-2 mb-1">{data?.data.title_english}</h4>
        <small>
          episodes {data?.data.episodes} <span>| {data?.data.status}</span>
        </small>
        <p className="text-lg font-medium text-gray-500 mt-4 text-justify">
          {data?.data?.synopsis && data?.data?.synopsis.slice(0, 200)}...
        </p>

        <Link
          to={data?.data?.url}
          target="_blank"
          className="mt-4 btn w-fit hover:text-white"
        >
          Watch
        </Link>
      </div>
    </div>
  );
};

export default RandomCard;
