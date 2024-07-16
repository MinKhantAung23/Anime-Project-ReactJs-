/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTopAnimesQuery } from "../../store/service/endpoints/animes.endpoints";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import Loading from "../../components/loader/Loading";
import { Alert, Pagination } from "antd";

const TopAnimePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useTopAnimesQuery({
    page: currentPage,
    limit: 20,
  });
  // console.log(topAnime);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

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
        Top Animes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 m-4">
        {data?.data?.map((anime) => (
          <div key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>

      <Pagination
        current={currentPage}
        total={data.pagination.items.total}
        pageSize={data.pagination.items.per_page}
        onChange={onPageChange}
        style={{ textAlign: "center", marginTop: 20 }}
      />
    </section>
  );
};

export default TopAnimePage;
