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
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 55px;
  height: 48px;
  top: 0;
  left: 0;
`;

export const MainContent = styled(Content)`
  overflow: initial;
  margin: 24px;
`;

export const MainContentWrapper = styled.div`
  margin: -24px -24px 0;
`;

export const ChildContentWrapper = styled.div`
  margin: 24px 24px 0;
  padding: inherit;
`;

export const SideBarPlaceholder = styled.div`
  width: 48px;
  overflow: hidden;
  flex: 0 0 48px;
  max-width: 48px;
  min-width: 48px;
  transition: background-color 0.3s ease 0s, min-width 0.3s ease 0s,
    max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

  @media (min-width: 991px) {
    width: 208px;
    overflow: hidden;
    flex: 0 0 0;
    max-width: 0;
    min-width: 0;
    transition: background-color 0.3s ease 0s, min-width 0.3s ease 0s,
      max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`;

export const HeaderPlaceholder = styled.header`
  height: 48px;
  line-height: 48px;
  background: transparent;
  flex: 0 0 auto;
`;

export const NavBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  background-color: #001529;
`;

export const Logo = styled.div`
  padding: 0px;
  height: 48px;
  line-height: 48px;
  width: 100%;
  z-index: 100;
  right: 0px;
  padding-left:10px
`;

export const LogoText = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  font-size: 20px;
`;
