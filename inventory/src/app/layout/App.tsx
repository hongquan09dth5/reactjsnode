import React from "react";
import "./styles.css";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDashboard from "../../features/product/productDashboard/ProductDashboard";
import SideBar from "../../features/sidebar/SiderBar";
import ProductDetailedPage from "../../features/product/productDetailed/ProductDetailedPage";
import ProductForm from "../../features/product/productForm/ProductForm";
import {
  ContentLayout,
  HeaderPlaceholder,
  Logo,
  LogoText,
  MainContent,
  MainContentWrapper,
  MainHeader,
  MainLayout,
  NavBar,
  SideBarPlaceholder,
} from "./App.styled";

const { Footer } = Layout;

const App = () => (
  <>
    <div>
      <MainLayout hasSider>
        <SideBarPlaceholder />
        <SideBar />

        <ContentLayout>
          <HeaderPlaceholder />
          <MainHeader>
            <NavBar>
              <Logo className="logo ant-row">
                <LogoText>BADMINTON</LogoText>
              </Logo>
            </NavBar>
          </MainHeader>
          <MainContent>
            <div>
              <MainContentWrapper>
                <Route path="/" component={HomePage} exact />
                <Route path="/products" component={ProductDashboard} />
                <Route path="/product/:id" component={ProductDetailedPage} />
                <Route
                  path={["/createProduct", "/updateProduct/:id"]}
                  component={ProductForm}
                />
              </MainContentWrapper>
            </div>
          </MainContent>
          <Footer style={{ textAlign: "center" }}></Footer>
        </ContentLayout>
      </MainLayout>
    </div>
  </>
);

export default App;
