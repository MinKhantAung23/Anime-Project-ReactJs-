/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import AnimeDetailCard from "../../components/AnimeDetail/AnimeDetailCard";
import { useGetAnimeDetailQuery } from "../../store/service/endpoints/animes.endpoints";
import Loading from "../../components/loader/Loading";
import { Alert } from "antd";

const AnimeDetailsPage = () => {
  // const location = useLocation();
  const { id } = useParams();

  const { data, isLoading, error } = useGetAnimeDetailQuery(id);

  const anime = data?.data;

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
    <div>
      <AnimeDetailCard anime={anime} />
    </div>
  );
};

export default AnimeDetailsPage;
