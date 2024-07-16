/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const EpisodesVideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { entry, episodes } = video;

  const handleDetail = (id) => {
    navigate(`/anime-detail/${id}`);
  };

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Card
        hoverable
        style={{ width: 160, height: 280, margin: "10px" }}
        className=""
        cover={
          <div className="relative inline-block">
            <img
              src={entry.images.webp.image_url}
              alt={entry.title}
              className="h-[200px] w-full"
            />
            <div className="flex flex-col absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white font-semibold px-1 py-2">
              {episodes.map((ep) => (
                <div
                  key={ep.mal_id}
                  className="flex justify-between items-center "
                >
                  <Link to={ep.url} target="_blank">
                    {ep.title}
                  </Link>
                  <span>{ep.premium ? "Premium" : ""}</span>
                </div>
              ))}
            </div>
          </div>
        }
        actions={[
          <LinkOutlined
            key="link"
            onClick={() => handleLinkClick(entry.url)}
          />,
        ]}
      >
        <Card.Meta
          title={entry.title}
          onClick={() => handleDetail(entry.mal_id)}
        />
      </Card>
    </div>
  );
};

export default EpisodesVideoCard;
