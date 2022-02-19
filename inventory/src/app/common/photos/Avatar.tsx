import React from "react";
import { SERVER_URL } from "./../../../app/common/constants";
import { Image } from "antd";

interface IProps {
  imageUrl: string;
}

export const Avatar: React.FC<IProps> = ({ imageUrl }) => {
  return (
    <div>
      <Image width={100} src={`${SERVER_URL}/${imageUrl}`} />
    </div>
  );
};
