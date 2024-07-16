/* eslint-disable no-unused-vars */
import React from "react";
import MangaDetailCard from "../../components/MangaDetail/MangaDetailCard";
import { useParams } from "react-router-dom";
import { useGetMangaDetailsQuery } from "../../store/service/endpoints/manga.endpoints";
import Loading from "../../components/loader/Loading";
import { Alert } from "antd";

const MangaDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMangaDetailsQuery(id);
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
    <div>
      <MangaDetailCard mangaDetail={data?.data} />
    </div>
  );
};

export default MangaDetailPage;
