import React from "react";
import { Spin } from "antd";

import { Spinner, LoadingOutlinedIcon } from "./LoadingComponent.styled";

const antIcon = <LoadingOutlinedIcon spin />;

const LoadingComponent = () => {
  return (
    <Spinner>
      <Spin indicator={antIcon} />
    </Spinner>
  );
};

export default LoadingComponent;
