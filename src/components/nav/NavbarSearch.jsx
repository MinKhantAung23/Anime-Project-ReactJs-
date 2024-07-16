/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const NavbarSearch = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to={"/search"}>
        <SearchOutlined className=" text-xl me-4 hover:scale-95" />
      </Link>
      <Link to={"/bookmark"} className="hidden sm:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:fill-black transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NavbarSearch;
