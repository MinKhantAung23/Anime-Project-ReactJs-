/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, message, Popconfirm, Space, Table, Tag } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../../store/features/bookmark/bookmarkSlice";
import { Link } from "react-router-dom";

const BookmarkCard = ({ bookmarks }) => {
  const dispatch = useDispatch();
  // console.log(bookmarks);
  const columns = [
    {
      title: "Image",
      dataIndex: ["images", "jpg", "image_url"],
      key: "image",
      render: (image_url) => (
        <img src={image_url} alt="anime" style={{ width: 50 }} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this bookmark?"
          onConfirm={() => {
            dispatch(removeBookmark(record.mal_id));
            message.success("Bookmark removed");
          }}
          okText="Yes"
          cancelText="No"
        >
          <DeleteFilled className="text-red-500 text-lg hover:text-red-700 " />
        </Popconfirm>
      ),
    },
  ];

  const expandable = {
    expandedRowRender: (record) => (
      <div>
        <p>
          <strong>English Title:</strong>{" "}
          <Link to={`/anime-detail/${record.mal_id}`}>
            {record.title_english || "N/A"}
          </Link>
        </p>
        <p>
          <strong>Type:</strong> {record.type}
        </p>
        <p>
          <strong>Status:</strong> {record.status}
        </p>
        <p>
          <strong>Year:</strong> {record.year || "N/A"}
        </p>
        {record.type.toLowerCase() === "tv" && (
          <p>
            <strong>Episodes:</strong> {record.episodes}
          </p>
        )}
        {record.type.toLowerCase() === "manga" && (
          <>
            <p>
              <strong>Volumes:</strong> {record.volumes}
            </p>
            <p>
              <strong>Chapters:</strong> {record.chapters}
            </p>
          </>
        )}
        <p>
          <strong>Synopsis:</strong>{" "}
          {record.synopsis.split(" ").slice(0, 80).join(" ")}...
        </p>
        <p className="mb-4">
          <strong>Source:</strong>{" "}
          <Link
            to={record.url}
            className="text-blue-400 hover:text-blue-600 hover:underline"
          >
            {record.url}
          </Link>
        </p>
        <Link to={`/anime-detail/${record.mal_id}`} className="btn">
          Details
        </Link>
      </div>
    ),
    rowExpandable: (record) => record.name !== "Not Expandable",
  };
  return (
    <div className="mx-4">
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Table
        columns={columns}
        expandable={expandable}
        size="large"
        dataSource={bookmarks}
        responsive
        rowKey="mal_id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default BookmarkCard;
