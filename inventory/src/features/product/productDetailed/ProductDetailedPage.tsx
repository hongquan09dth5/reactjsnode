import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./../../../app/hook/hooks";
import { fetchProductsByIdAsync, deleteProductAsync } from "../productActions";
import { Image, Row, Col, Button, Typography, Modal, notification } from "antd";
import {
  ToolbarContainer,
  ToolbarWithBigDevice,
  ToolbarWithSmallDevice,
} from "../../../app/common/styled/ToolBar.styled";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import {
  ColumnHeader,
  Heading,
  ShortDescription,
  ImageWrapper,
} from "./ProductDetailPage.styled";

import { SERVER_URL } from "./../../../app/common/constants";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { CardRadius } from "../../../app/common/styled/CardRadius.styled";
import { ChildContentWrapper } from "../../../app/layout/App.styled";
import { GhostPageHeader } from "../../../app/common/styled/GhostPageHeader.styled";
import { productBrands } from "./../../../app/model/productBrand";

const { Text } = Typography;
const { confirm } = Modal;

const ProductDetailedPage = ({ match, history }) => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);
  const { loading } = useAppSelector((state) => state.async);
  useEffect(() => {
    dispatch(fetchProductsByIdAsync(match.params.id));
  }, [dispatch, match.params.id]);

  const showConfirm = () => {
    confirm({
      title: "Do you want to delete this product?",
      icon: <ExclamationCircleOutlined />,
      content: "Product name: " + product.name,
      onOk() {
        onConfirmDeleteProduct();
      },
    });
  };

  const onConfirmDeleteProduct = () => {
    try {
      dispatch(deleteProductAsync(product.id));
      history.push("/products");
      openNotification();
    } catch (error) {
      openNotification(error);
    }
  };

  const openNotification = (error?: any) => {
    if (!error) {
      notification["success"]({
        message: "Success",
        description: `You have deleted ${product.name}.`,
      });
    } else {
      notification["error"]({
        message: "Error",
        description: "Please try again.",
      });
    }
  };

  if (loading) return <LoadingComponent />;

  return (
    <>
      <GhostPageHeader className="site-page-header" title="Product Profile" />

      <ChildContentWrapper>
        {product && (
          <>
            <CardRadius>
              <Row>
                <Col span={24}>
                  <ToolbarContainer>
                    <Heading>{product.name}</Heading>
                    <ToolbarWithSmallDevice>
                      <Link to="/products">
                        <Button
                          type="default"
                          icon={<RollbackOutlined />}
                        ></Button>
                      </Link>
                      <Link to={`/updateProduct/${product.id}`}>
                        <Button type="primary" icon={<EditOutlined />}></Button>
                      </Link>

                      <Button
                        type="default"
                        icon={<DeleteOutlined />}
                        onClick={() => showConfirm()}
                      ></Button>
                    </ToolbarWithSmallDevice>
                    <ToolbarWithBigDevice>
                      <Link to={`/updateProduct/${product.id}`}>
                        <Button type="primary" icon={<EditOutlined />}>
                          Edit
                        </Button>
                      </Link>

                      <Button
                        type="default"
                        icon={<DeleteOutlined />}
                        onClick={() => showConfirm()}
                      >
                        Delete
                      </Button>
                    </ToolbarWithBigDevice>
                  </ToolbarContainer>
                </Col>
                <Col span={24}>
                  <ShortDescription>{product.description}</ShortDescription>
                </Col>
                <Col lg={11} sm={24}>
                  <ImageWrapper>
                    <Image src={`${SERVER_URL}/${product.imageurl}`} />
                  </ImageWrapper>
                </Col>
                <Col lg={11} style={{ paddingLeft: 20 }} sm={24}>
                  <table>
                    <tbody>
                      <tr>
                        <ColumnHeader>Flex:</ColumnHeader>
                        <td>{product.flex}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Frame:</ColumnHeader>
                        <td>{product.frame}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Weight/Grip:</ColumnHeader>
                        <td>{product.weight}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Stringing recommend:</ColumnHeader>
                        <td>{product.stringing}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Color(s):</ColumnHeader>
                        <td>{product.colors}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Made in:</ColumnHeader>
                        <td>{product.origin}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Item Code:</ColumnHeader>
                        <td>{product.itemcode}</td>
                      </tr>
                      <tr>
                        <ColumnHeader>Brand:</ColumnHeader>
                        <td>
                          {
                            productBrands.find(
                              (brand) => brand.id === product.productbrand
                            )?.name
                          }
                        </td>
                      </tr>
                      <tr>
                        <ColumnHeader>Price:</ColumnHeader>
                        <td>
                          <Text type="danger">
                            <NumberFormat
                              value={product.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                          </Text>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2}>
                          <Link to="/products">
                            <Button type="default" icon={<RollbackOutlined />}>
                              Back to list
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </Col>
              </Row>
            </CardRadius>
          </>
        )}
      </ChildContentWrapper>
    </>
  );
};

export default ProductDetailedPage;
