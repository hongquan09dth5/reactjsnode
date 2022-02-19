import React from "react";
import { Space, Table, Modal, Image, Typography, notification } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hook/hooks";
import { deleteProductAsync, fetchProductsAsync } from "../productActions";
import NumberFormat from "react-number-format";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { SERVER_URL } from "./../../../app/common/constants";
import { IProductListItem } from "../../../app/model/product";
import ProductListToolbar from "./ProductListToolbar";
const { confirm } = Modal;

interface IProps {
  products: IProductListItem[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.async);
  const columns: ColumnsType<IProductListItem> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 300,
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text: string, record: IProductListItem) => (
        <Link to={`/product/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Image",
      dataIndex: "imageurl",
      key: "imageurl",
      width: 120,
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text: string) => (
        <Image width={100} src={`${SERVER_URL}/${text}`} />
      ),
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      width: 120,
      render: (text: string) => (
        <NumberFormat
          value={text}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["lg"],
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: IProductListItem) => (
        <Space size="middle">
          <Link to={`/updateProduct/${record.id}`}>Edit</Link>
          <Typography.Link onClick={() => showConfirm(record.id, record.name)}>
            Delete
          </Typography.Link>
        </Space>
      ),
    },
  ];

  const showConfirm = (id: number, name: string) => {
    confirm({
      title: "Do you want to delete this product?",
      icon: <ExclamationCircleOutlined />,
      content: "Product name: " + name,
      onOk() {
        onConfirmDeleteProduct(id, name);
      },
    });
  };

  const onConfirmDeleteProduct = async (id: number, name: string) => {
    try {
      await dispatch(deleteProductAsync(id));
      await dispatch(fetchProductsAsync());
      openNotification(name);
    } catch (error) {
      openNotification(name, error);
    }

    await dispatch(fetchProductsAsync());
  };

  const openNotification = (name?: string, error?: any) => {
    if (!error) {
      notification["success"]({
        message: "Success",
        description: `You have deleted ${name}.`,
      });
    } else {
      notification["error"]({
        message: "Error",
        description: "Please try again.",
      });
    }
  };

  return (
    <>
      <ProductListToolbar />
      <Table
        loading={loading}
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      ;
    </>
  );
};

export default ProductList;
