/* eslint-disable no-unused-vars */
import React from "react";
import EpisodesVideoCard from "../../components/watchVideo/EpisodesVideoCard";
import { useWatchRecentQuery } from "../../store/service/endpoints/watchVideo.endpoints";
import { Alert, Spin } from "antd";
import Loading from "../../components/loader/Loading";

const EpisodeVideosPage = () => {
  const { data, isLoading, error } = useWatchRecentQuery();

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
    <section>
      <h1 className="text-center font-bold text-2xl text-red-500 font-serif underline my-4">
        Episode Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-4 m-4">
        {data?.data?.map((recent) => (
          <EpisodesVideoCard video={recent} key={recent.entry.mal_id} />
        ))}
      </div>
    </section>
  );
};

export default EpisodeVideosPage;
