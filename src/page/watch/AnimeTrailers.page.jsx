/* eslint-disable no-unused-vars */
import React from "react";
import { useWatchTrailerQuery } from "../../store/service/endpoints/watchVideo.endpoints";
import { Spin } from "antd";
import TrailerVideo from "../../components/watchVideo/TrailerVideo";

const AnimeTrailersPage = () => {
  const { data, isLoading, error } = useWatchTrailerQuery();
  console.log(data);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>Error loading trailers</div>;
  }
  return (
    <section>
      <h1 className="text-center font-bold text-2xl text-red-500 font-serif underline my-4">
        Anime Trailers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-4 m-4">
        {data?.data?.map((promo) => (
          <TrailerVideo promo={promo} key={promo.entry.mal_id} />
        ))}
      </div>
    </section>
  );
};

export default AnimeTrailersPage;
