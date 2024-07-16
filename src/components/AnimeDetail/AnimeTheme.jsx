/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGetThemeQuery } from "../../store/service/endpoints/animes.endpoints";
import { PlayCircleFilled } from "@ant-design/icons";
import { Alert } from "antd";
import Loading from "../loader/Loading";

const AnimeTheme = ({ animeId }) => {
  const { data, isLoading, error } = useGetThemeQuery(animeId);

  const opening_themes = data?.data?.openings;
  const ending_themes = data?.data?.endings;

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
    <div className="flex flex-col sm:flex-row justify-center items-start gap-4 my-3">
      <div>
        <h2 className="mb-2 font-semibold">Opening Themes</h2>
        <ul>
          {opening_themes?.map((theme, index) => (
            <li key={index} className="text-sm">
              <PlayCircleFilled className="hover:text-gray-500 me-1" />
              {theme}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:ms-4">
        <h2 className="mb-2 font-semibold ">Ending Themes</h2>
        <ul>
          {ending_themes?.map((theme, index) => (
            <li key={index} className="text-sm">
              <PlayCircleFilled className="hover:text-gray-500 me-1" />
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimeTheme;
