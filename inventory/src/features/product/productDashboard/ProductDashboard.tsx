import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./../../../app/hook/hooks";
import { fetchProductsAsync } from "../productActions";
import ProductList from "./ProductList";

const ProductDashboard = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(fetchProductsAsync());
    };
    
    fetchProducts();
  }, [dispatch]);
  return (
    <>
      {products && (
        <>
          <ProductList products={products} />
        </>
      )}
    </>
  );
};

export default ProductDashboard;
