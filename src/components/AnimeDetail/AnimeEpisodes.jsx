/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGetAnimeEpisodesQuery } from "../../store/service/endpoints/animes.endpoints";
import { Alert, Card } from "antd";
import Loading from "../loader/Loading";

const AnimeEpisodes = ({ animeId }) => {
  const id = animeId?.mal_id;
  const { data, isLoading, error } = useGetAnimeEpisodesQuery(id);

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
    <div className="">
      <Card title="Episodes" className="text-center" loading={isLoading}>
        {data?.data?.map((ep) => (
          <Card.Grid key={ep?.mal_id} className="text-center w-[25%]">
            <h1>{ep?.title}</h1>
          </Card.Grid>
        ))}
      </Card>
    </div>
  );
};

export default AnimeEpisodes;
