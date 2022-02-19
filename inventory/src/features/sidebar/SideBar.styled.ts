
import { Layout } from "antd";
import styled from "styled-components";

export const Logo = styled.div`
  height: 64px;
  background-color: #001529;
  color: #fff;
`;

export const LogoText = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  font-size: 20px;
  color: #fff !important;
`;

export const LeftSider = styled(Layout.Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
`;