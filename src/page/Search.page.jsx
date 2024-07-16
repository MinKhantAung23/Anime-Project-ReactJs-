/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SerachBar from "../components/search/SerachBar";
import SearchCard from "../components/search/SearchCard";
import AnimeCard from "../components/AnimeCard/AnimeCard";
import { useSearchAnimeQuery } from "../store/service/endpoints/animes.endpoints";
import { Alert, Spin } from "antd";
import Loading from "../components/loader/Loading";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading } = useSearchAnimeQuery(query, {
    skip: !query,
  });
  // console.log(data);
  const onHandleSearch = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <div className="sticky top-[78px] bg-white px-1 py-2  z-10">
        <SerachBar searchInput={onHandleSearch} />
        <hr className="border border-red-500" />
      </div>

      <div className="px-1 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 my-4">
        {isLoading && <Loading />}
        {error && <Alert message="Error" type="error" />}
        {data?.data?.map((anime) => (
          <div key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
      {query && data && (
        <p className="text-center text-xl font-bold text-red-400">
          Anime Not Found.
        </p>
      )}
      {!query && (
        <p className="text-center text-xl font-bold text-blue-400">
          No Search Anime
        </p>
      )}
    </div>
  );
};

export default SearchPage;
