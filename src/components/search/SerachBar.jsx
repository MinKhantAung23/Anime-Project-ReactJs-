/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";

const SerachBar = ({ searchInput }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    searchInput(search);
  };

  const handleClear = () => {
    setSearch("");
    searchInput("");
  };

  return (
    <form className="flex mb-4 shadow-md rounded-lg">
      <Input
        placeholder="Search Animes"
        prefix={<SearchOutlined className=" text-lg me-4 hover:scale-90" />}
        allowClear
        onChange={handleInputChange}
        size="large"
        autoFocus
        value={search}
      />
      {search && (
        <Button
          type="text"
          className=""
          icon={<CloseCircleOutlined />}
          onClick={handleClear}
        />
      )}
    </form>
  );
};

export default SerachBar;
