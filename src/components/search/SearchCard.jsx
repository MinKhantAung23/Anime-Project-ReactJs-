/* eslint-disable no-unused-vars */

import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const SearchCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      className="-z-20"
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default SearchCard;
