import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { LeftSider} from "./SideBar.styled";
import { DashboardOutlined, TableOutlined } from "@ant-design/icons";
const SideBar = () => (
  <>
    <LeftSider breakpoint="lg" collapsedWidth="48">
      {/* <Link to="/">
        <Logo className="logo ant-row">
          <LogoText>BADMINTON</LogoText>
        </Logo>
      </Link> */}

      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <NavLink to="/"> Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<TableOutlined />}>
          <NavLink to="/products"> Product</NavLink>
        </Menu.Item>
      </Menu>
    </LeftSider>
  </>
);

export default SideBar;
