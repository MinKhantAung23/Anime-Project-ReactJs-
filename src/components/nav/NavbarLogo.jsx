/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <div className="me-10">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo picture"
          className="w-12 h-7 rounded hover:rotate-180 inline-block transition-all"
        />
        <span className="hidden sm:inline-block font-serif ms-1 font-bold text-xl animate-pulse">
          Anime
        </span>
      </Link>
    </div>
  );
};

export default NavbarLogo;
