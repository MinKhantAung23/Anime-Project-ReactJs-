/* eslint-disable no-unused-vars */
import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center my-4 mx-auto">
      <Spin className="me-2" />{" "}
      <span className="animate-pulse font-medium">loading ...</span>
    </div>
  );
};

export default Loading;
