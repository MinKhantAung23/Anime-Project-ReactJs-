/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGetAnimeCharacterQuery } from "../../store/service/endpoints/animes.endpoints";
import { Link } from "react-router-dom";
import { Alert } from "antd";

const AnimeCharacters = ({ aniId }) => {
  const { data, isLoading, error } = useGetAnimeCharacterQuery(aniId);

  const fifteenCharacters = data?.data.slice(0, 15);

  if (isLoading) return <div>Loading...</div>;
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
      <div className="flex justify-between items-center my-2">
        <h2 className="font-medium text-sm">Characters & Voice Actor</h2>
      </div>
      <hr className="mb-2 text-red-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fifteenCharacters?.map((cha) => (
          <div
            key={cha?.character.mal_id}
            className="border p-1 flex flex-col sm:flex-row justify-between items-center hover:shadow-md"
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

            {cha?.voice_actors
              .filter((actor) => actor.language === "Japanese")
              .map((actor) => (
                <div
                  key={actor?.person.mal_id}
                  className="flex justify-end sm:w-64"
                >
                  <div className="me-2 text-end ">
                    <h6 className="text-sm ">{actor?.person.name}</h6>
                    <small className="text-xs">{actor?.language}</small>
                  </div>

                  <img
                    src={actor?.person.images.jpg.image_url}
                    width={"40px"}
                    alt={actor?.person.name}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeCharacters;
