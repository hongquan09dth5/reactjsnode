import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content } = Layout;

export const MainLayout = styled(Layout)`
  min-height: 100vh;
`;

export const ContentLayout = styled(Layout)`
  margin-left: 0;
  
  @media (min-width: 991px) {
    margin-left: 200px;
  }
`;

export const MainHeader = styled(Header)`
  padding: 0;
`;

export const MainContent = styled(Content)`
  margin: 24px 16px 0;
  overflow: initial;
`;
