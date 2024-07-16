/* eslint-disable no-unused-vars */
import React from "react";
import { Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";

const NavbarRoute = () => {
  const anime = [
    {
      key: "1",
      label: <NavLink to={"/anime-search"}>Anime Search</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to={"/animes"}>Anime</NavLink>,
    },
    {
      key: "3",
      label: <NavLink to={"/top"}>Top Anime</NavLink>,
    },
    {
      key: "4",
      label: <NavLink to={"/seasonal"}>Seasonal Anime</NavLink>,
    },
    {
      key: "5",
      label: <NavLink to={"/upcoming"}>Upcoming</NavLink>,
    },
  ];

  const manga = [
    {
      key: "1",
      label: <NavLink to={"/manga-search"}>Manga Search</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to={"/manga-store"}>Manga Store</NavLink>,
    },
    {
      key: "3",
      label: <NavLink to={"/top-manga"}>Top Manga</NavLink>,
    },
  ];

  const watch = [
    {
      key: "1",
      label: <NavLink to={"/episodes"}>Epidode Videos</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to={"/popular-episodes"}>Watch Popular Epidodes</NavLink>,
    },
    {
      key: "3",
      label: <NavLink to={"/trailers"}>Anime Trailers</NavLink>,
    },
  ];
  return (
    <div className="hidden sm:flex justify-center items-center">
      <NavLink to={"/"} className="me-4">
        Home
      </NavLink>
      <Dropdown
        menu={{ items: anime, selectable: true }}
        arrow={{
          pointAtCenter: true,
        }}
      >
        <a onClick={(e) => e.preventDefault()} className="me-4">
          <Space>Anime</Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{ items: manga, selectable: true }}
        arrow={{
          pointAtCenter: true,
        }}
      >
        <a onClick={(e) => e.preventDefault()} className="me-4">
          <Space>Manga</Space>
        </a>
      </Dropdown>
      <Dropdown
        menu={{ items: watch, selectable: true }}
        arrow={{
          pointAtCenter: true,
        }}
      >
        <a onClick={(e) => e.preventDefault()} className="me-4">
          <Space>Watch</Space>
        </a>
      </Dropdown>
      <NavLink to={"/characters"} className="me-4">
        Characters
      </NavLink>
      <NavLink to={"/about"} className="me-4">
        About
      </NavLink>
    </div>
  );
};

export default NavbarRoute;
