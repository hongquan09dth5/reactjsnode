import { Layout } from "antd";
import styled from "styled-components";

export const LeftSider = styled(Layout.Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  padding-top: 48px;
`;
