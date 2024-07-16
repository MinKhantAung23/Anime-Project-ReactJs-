/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Alert, Table } from "antd";
import Loading from "../../components/loader/Loading";
import { Link } from "react-router-dom";
import { useCharcterQuery } from "../../store/service/endpoints/characters.endpoints";

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useCharcterQuery({
    page: currentPage,
    limit: 10,
  });

  // console.log(data);

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
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <Link style={{ width: 50 }} className=" font-bold">
          {name}
        </Link>
      ),
    },
    {
      title: "Favorites",
      dataIndex: "favorites",
      key: "favorites",
    },
  ];

  const expandable = {
    expandedRowRender: (record) => (
      <div>
        <p>
          <strong>Kanji Name:</strong> {record.name_kanji}
        </p>
        <p className="mt-2">
          <strong>About:</strong> {record.about}
        </p>
        <ul>
          {record.nicknames.map((nickname, index) => (
            <li key={index} className="mt-2">
              <strong>Nickname:</strong> : {nickname}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

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
    <section className="mx-4">
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Table
        columns={columns}
        expandable={expandable}
        size="large"
        dataSource={data?.data}
        responsive
        rowKey="mal_id"
        pagination={{
          current: currentPage,
          onChange: onPageChange,
          showSizeChanger: true,
          total: data?.pagination.items.total,
          pageSize: data?.pagination.items.per_page,
        }}
      />
    </section>
  );
};

export default CharactersPage;
