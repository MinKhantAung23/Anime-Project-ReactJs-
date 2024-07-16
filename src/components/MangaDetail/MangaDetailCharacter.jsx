/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGetMangaCharactesQuery } from "../../store/service/endpoints/manga.endpoints";
import { Link } from "react-router-dom";
import Loading from "../loader/Loading";
import { Alert } from "antd";

const MangaDetailCharacter = ({ mangaDetail }) => {
  const id = mangaDetail?.mal_id;
  const { data, isLoading, error } = useGetMangaCharactesQuery(id);
  // console.log(data);
  const fifteenCharacters = data?.data.slice(0, 15);

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
    <div className="mx-4">
      <div className="flex justify-between items-center my-2">
        <h2 className="font-medium text-sm">Characters</h2>
      </div>
      <hr className="mb-2 text-red-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fifteenCharacters?.map((cha) => (
          <div
            key={cha?.character.mal_id}
            className="border p-1 hover:shadow-md"
          >
            <div className="flex mb-4 sm:mb-0 sm:w-64">
              <img
                src={cha?.character.images.jpg.image_url}
                width={"40px"}
                alt={cha?.character.name}
              />
              <div className="ms-2">
                <h6 className="text-sm">{cha?.character.name}</h6>
                <small className="text-xs">{cha?.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaDetailCharacter;
