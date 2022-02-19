import React from "react";
import { Button, Card, Space } from "antd";
import { Link } from "react-router-dom";
import { ToolbarContainer } from "../../../app/common/styled/ToolBar.styled";
import { useAppDispatch } from "../../../app/hook/hooks";
import { fetchProductsAsync } from "../productActions";

import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

const ProductListToolbar = () => {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <ToolbarContainer>
        <h3>Product List</h3>
        <Space>
          <Link to={`/createProduct`}>
            <Button type="primary" icon={<PlusOutlined />}>
              Add Product
            </Button>
          </Link>

          <Button
            type="text"
            icon={<ReloadOutlined />}
            onClick={() => dispatch(fetchProductsAsync())}
          ></Button>
        </Space>
      </ToolbarContainer>
    </Card>
  );
};

export default ProductListToolbar;
