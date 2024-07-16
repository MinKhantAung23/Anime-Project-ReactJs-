/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Drawer, Dropdown, Menu, Space } from "antd";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const NavbarDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const NavbarItems = [
    {
      key: "home",
      label: (
        <NavLink to={"/"} className="font-semibold text-lg">
          Home
        </NavLink>
      ),
    },
    {
      key: "subAnime",

      label: "Anime",
      children: [
        {
          key: "anime-search",
          label: <NavLink to="/anime-search">Anime Search</NavLink>,
        },
        {
          key: "animes",
          label: <NavLink to="/animes">Anime</NavLink>,
        },
        {
          key: "top-anime",
          label: <NavLink to="/top">Top Anime</NavLink>,
        },
        {
          key: "seasonal-anime",
          label: <NavLink to="/seasonal">Seasonal Anime</NavLink>,
        },
        {
          key: "upcoming-anime",
          label: <NavLink to="/upcoming">Upcoming</NavLink>,
        },
      ],
    },
    {
      key: "subManga",
      label: "Manga",

      children: [
        {
          key: "manga-search",
          label: <NavLink to="/manga-search">Manga Search</NavLink>,
        },
        {
          key: "manga",
          label: <NavLink to="/manga-store">Manga</NavLink>,
        },
        {
          key: "top-manga",
          label: <NavLink to="/top-manga">Top Manga</NavLink>,
        },
      ],
    },
    {
      key: "subWatch",
      label: "Watch",

      children: [
        {
          key: "episodes",
          label: <NavLink to="/episodes">Episode Videos</NavLink>,
        },
        {
          key: "popular-episodes",
          label: (
            <NavLink to="/popular-episodes">Watch Popular Episodes</NavLink>
          ),
        },
        {
          key: "trailers",
          label: <NavLink to="/trailers">Anime Trailers</NavLink>,
        },
      ],
    },
    {
      key: "characters",

      label: (
        <NavLink to={"/characters"} className="font-semibold text-lg">
          Characters
        </NavLink>
      ),
    },
    {
      key: "link",

      label: (
        <NavLink to={"/about"} className="font-semibold text-lg">
          About
        </NavLink>
      ),
    },
  ];
  return (
    <div className="visible sm:hidden me-4">
      <Button type="primary" size="small" ghost onClick={showDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      <Drawer
        width={230}
        title={
          <div className="flex justify-between">
            <h1>Anime</h1>
            <Link to={"/bookmark"} onClose={onClose}>
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
        }
        onClose={onClose}
        placement={"left"}
        open={open}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={["subAnime"]}
          items={NavbarItems}
          onClick={onClose}
        ></Menu>
      </Drawer>
    </div>
  );
};

export default NavbarDrawer;
