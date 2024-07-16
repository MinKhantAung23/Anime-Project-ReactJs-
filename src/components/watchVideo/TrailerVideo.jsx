/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { PlayCircleOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TrailerVideo = ({ promo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState("");
  const showModal = (url) => {
    setCurrentTrailerUrl(url);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentTrailerUrl("");
  };

  return (
    <div>
      <Card
        key={promo.entry.mal_id}
        hoverable
        cover={
          <div className="relative inline-block ">
            <img
              alt="trailer thumbnail"
              src={promo.entry.images.webp.image_url}
              className="h-[200px] w-full"
            />
            <div className="flex flex-col absolute bottom-0 w-full bg-black bg-opacity-20 text-white font-semibold px-1 py-2">
              <h1>{promo.title}</h1>
            </div>
            <div className="flex flex-col absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-md ring-white bg-black bg-opacity-45 hover:bg-opacity-65 text-white font-semibold px-1 py-2">
              <PlayCircleOutlined
                className=" text-xl px-2 "
                onClick={() => showModal(promo.trailer.url)}
              />
            </div>
          </div>
        }
        style={{ width: 160, height: 280, margin: "10px" }}
      >
        <Meta
          title={promo.entry.title}
          description={
            <Link to={promo.trailer.url} target="_blank">
              <YoutubeOutlined className="text-red-500 me-1" /> Watch Trailer
            </Link>
          }
        />

        <Modal
          title={promo.entry.title}
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
        >
          <iframe
            width="100%"
            height="400px"
            src={promo.trailer.embed_url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
          />
        </Modal>
      </Card>
    </div>
  );
};

export default TrailerVideo;
