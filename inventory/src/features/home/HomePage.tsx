import React from "react";
import { CardRadius } from "../../app/common/styled/CardRadius.styled";
import { GhostPageHeader } from "../../app/common/styled/GhostPageHeader.styled";
import { ChildContentWrapper } from "../../app/layout/App.styled";

const HomePage = () => {
  return (
    <>
      <GhostPageHeader className="site-page-header" title="Dashboard" />
      <ChildContentWrapper><CardRadius>Welcome</CardRadius></ChildContentWrapper>
    </>
  );
};

export default HomePage;
