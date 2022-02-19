import React, { useState } from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./../../../app/hook/hooks";
import { Form, Input, Card, Upload, Button, notification, message } from "antd";
import {
  fetchProductsByIdAsync,
  createProductAsync,
  updateProductAsync,
  clearProduct,
} from "./../productActions";

import { FormItem, SubmitButton } from "./ProductForm.styled";
import { FullWithInputNumber } from "../../../app/common/styled/InputNumber.styled";
import { Link } from "react-router-dom";
import { Avatar } from "./../../../app/common/photos/Avatar";
import { IProduct } from "../../../app/model/product";
import { UploadFile } from "antd/lib/upload/interface";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const ProductForm = ({ match, history, location }) => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);
  const [initLoading, setInitLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const isCreating = location.pathname === "/createProduct";

  useEffect(() => {
    if (!isCreating) {
      const fetchProductById = async () => {
        await dispatch(fetchProductsByIdAsync(match.params.id)).then(() =>
          setInitLoading(false)
        );
      };

      fetchProductById();

      return;
    }

    dispatch(clearProduct());
    setInitLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, match.params.id]);

  const initialValues: IProduct =
    product && !isCreating
      ? product
      : {
          id: "",
          description: "",
          price: "",
          imageurl: "",
          name: "",
          flex: "",
          frame: "",
          weight: "",
          stringing: "",
          colors: "",
          itemcode: "",
          origin: "",
          producttype: "",
          productbrand: "",
          files: [],
        };

  const validations = {
    name: [
      { required: true, message: "Please enter product name." },
      {
        max: 100,
        message: "Please enter less than or equal to 100 characters.",
      },
    ],
    price: [{ required: true, message: "Please enter price." }],
    flex: [
      {
        max: 15,
        message: "Please enter less than or equal to 15 characters.",
      },
    ],
    frame: [
      {
        max: 125,
        message: "Please enter less than or equal to 125 characters.",
      },
    ],
    weight: [
      {
        max: 225,
        message: "Please enter less than or equal to 225 characters.",
      },
    ],
    stringing: [
      {
        max: 225,
        message: "Please enter less than or equal to 225 characters.",
      },
    ],
    colors: [
      {
        max: 225,
        message: "Please enter less than or equal to 225 characters.",
      },
    ],
    origin: [
      {
        max: 25,
        message: "Please enter less than or equal to 25 characters.",
      },
    ],
    itemcode: [
      {
        max: 10,
        message: "Please enter less than or equal to 10 characters.",
      },
    ],
    files: [{ required: true, message: "Please upload avatar." }],
  };

  const openNotification = (error?: any) => {
    if (!error) {
      const message = isCreating
        ? "You have created a product successfully !"
        : "You have updated the product successfully !";

      notification["success"]({
        message: "Success",
        description: message,
      });
    } else {
      notification["error"]({
        message: "Error",
        description: "Please try again.",
      });
    }
  };

  const onFinish = async (values: any) => {
    setActionLoading(true);
    try {
      const createOrUpdate = async () =>
        product
          ? dispatch(
              updateProductAsync({
                id: match.params.id,
                imageurl: product.imageurl,
                ...values,
              })
            )
          : dispatch(createProductAsync(values));

      await createOrUpdate().then(() => {
        openNotification();
        history.push("/products");
        setActionLoading(false);
      });
    } catch (error) {
      openNotification(error);
      setActionLoading(false);
    }
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const avatarCard = product ? <Avatar imageUrl={product.imageurl} /> : null;

  const uploadButton = (
    <div>
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file: UploadFile) => {
    const isValidFormatImage =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg";
    if (!isValidFormatImage) {
      message.error("You can only upload JPG/JPEG/PNG file!");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  if (initLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <>
        <Card>
          <Form
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
          >
            <FormItem label="Product Name" name="name" rules={validations.name}>
              <Input />
            </FormItem>
            <FormItem label="Product Description" name="description">
              <Input.TextArea rows={4} />
            </FormItem>

            <FormItem
              label="Image"
              name="files"
              getValueFromEvent={getFile}
              valuePropName="fileList"
              rules={
                isCreating
                  ? validations.files
                  : [{ required: false, message: "" }]
              }
            >
              <Upload
                maxCount={1}
                listType="picture-card"
                beforeUpload={beforeUpload}
                onPreview={onPreview}
              >
                {uploadButton}
              </Upload>
            </FormItem>
            {avatarCard}
            <FormItem label="Price" name="price" rules={validations.price}>
              <FullWithInputNumber />
            </FormItem>
            <FormItem label="Flex" name="flex" rules={validations.flex}>
              <Input />
            </FormItem>
            <FormItem label="Frame" name="frame" rules={validations.frame}>
              <Input />
            </FormItem>
            <FormItem
              label="Weight / Grip"
              name="weight"
              rules={validations.weight}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Stringing Advice"
              name="stringing"
              rules={validations.stringing}
            >
              <Input />
            </FormItem>
            <FormItem label="Color(s)" name="colors" rules={validations.colors}>
              <Input />
            </FormItem>
            <FormItem label="Made in" name="origin" rules={validations.origin}>
              <Input />
            </FormItem>
            <FormItem
              label="Item Code"
              name="itemcode"
              rules={validations.itemcode}
            >
              <Input />
            </FormItem>
            <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
              <SubmitButton
                type="primary"
                htmlType="submit"
                loading={actionLoading}
              >
                {isCreating ? "Create" : "Update"}
              </SubmitButton>
              <Link to="/products">
                <Button type="default">Back</Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </>
    );
  }
};

export default ProductForm;
