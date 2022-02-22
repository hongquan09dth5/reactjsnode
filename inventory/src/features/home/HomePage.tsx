import React, { useEffect } from "react";
import { CardRadius } from "../../app/common/styled/CardRadius.styled";
import { GhostPageHeader } from "../../app/common/styled/GhostPageHeader.styled";
import { useAppDispatch, useAppSelector } from "../../app/hook/hooks";
import { ChildContentWrapper } from "../../app/layout/App.styled";
import { fetchTotalByBrandAsync } from "../product/productActions";
import { Pie } from "@ant-design/plots";
import { productBrands } from "../../app/model/productBrand";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Col, Row } from "antd";

interface IProductByBrandChartItem {
  type: string;
  value: number;
}

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { totalByBrand } = useAppSelector((state) => state.product);
  const { loading } = useAppSelector((state) => state.async);

  useEffect(() => {
    const fetchTotalByBrand = async () => {
      await dispatch(fetchTotalByBrandAsync());
    };

    fetchTotalByBrand();
  }, [dispatch]);

  const brands = Object.assign(
    {},
    ...productBrands.map((brand) => {
      return { [brand.id]: brand.name };
    })
  );

  const data = totalByBrand.map((brand) => {
    return { type: brands[brand.productbrand], value: +brand.count };
  });

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{value}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };

  if (loading) return <LoadingComponent />;

  return (
    <>
      <GhostPageHeader className="site-page-header" title="Dashboard" />
      <ChildContentWrapper>
        <Row>
          <Col lg={11}>
            <CardRadius>
              <GhostPageHeader title="Product total by brand" />
              <Pie {...config} />
            </CardRadius>
          </Col>
        </Row>
      </ChildContentWrapper>
    </>
  );
};

export default HomePage;
