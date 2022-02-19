import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu } from "antd";
import { LeftSider, Logo, LogoText } from "./SideBar.styled";

const SideBar = () => (
  <>
    <LeftSider breakpoint="lg" collapsedWidth="0">
      <Link to="/">
        <Logo className="logo ant-row">
          <LogoText>BADMINTON</LogoText>
        </Logo>
      </Link>

      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <NavLink to="/products"> Product</NavLink>
        </Menu.Item>
      </Menu>
    </LeftSider>
  </>
);

export default SideBar;
