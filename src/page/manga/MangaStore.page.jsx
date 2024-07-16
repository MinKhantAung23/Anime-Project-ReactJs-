/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useMangaQuery } from "../../store/service/endpoints/manga.endpoints";
import MangaCard from "../../components/MangaCard/MangaCard";
import Loading from "../../components/loader/Loading";
import { Alert, Pagination, Spin } from "antd";

const MangaStorePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useMangaQuery({
    page: currentPage,
    limit: 20,
  });

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // console.log(data);

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
    <div className=" m-4">
      <h1 className="text-center font-serif text-2xl font-bold text-red-400 my-4 underline">
        Manga Store
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
        {data?.data?.map((manga) => (
          <div key={manga.mal_id}>
            <MangaCard manga={manga} isLoading={isLoading} />
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
    </div>
  );
};

export default MangaStorePage;
