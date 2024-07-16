/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const MangaCard = ({ manga }) => {
  return (
    <Link to={`/manga-detail/${manga.mal_id}`}>
      <Card
        title={manga.title}
        style={{
          width: 240,
          height: 350,
        }}
        hoverable
      >
        <img
          src={manga.images.jpg.image_url}
          className="h-52 w-full"
          alt={manga.title}
        />
        <p className="font-semibold mt-3">Rating : {manga.score}</p>
        <p className="">{manga.status}</p>
      </Card>
    </Link>
  );
};

export default MangaCard;
