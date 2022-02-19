import { IProduct } from "./../../app/model/product";
import agent from "./../../app/api/agent";
import {
  asyncStart,
  asyncFinish,
  asyncError,
} from "./../../app/store/asyncReducer";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  CLEAR_PRODUCT,
} from "./productConstants";
import { updateSingleProductImage } from "./../../app/common/photos/photo.service";

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(asyncStart());
  try {
    const products = await agent.Products.list();

    dispatch({ type: FETCH_PRODUCTS, payload: products });
    dispatch(asyncFinish());
  } catch (error) {
    dispatch(asyncError(error));
    throw error;
  }
};

export const fetchProductsByIdAsync = (id: number) => async (dispatch) => {
  dispatch(asyncStart());
  try {
    const data = await agent.Products.getById(id);

    dispatch({ type: FETCH_PRODUCT_BY_ID, payload: data });
    dispatch(asyncFinish());
  } catch (error) {
    dispatch(asyncError(error));
    throw error;
  }
};

export const createProductAsync = (req: IProduct) => async (dispatch) => {
  dispatch(asyncStart());
  try {
    if (req.files && req.files.length > 0) {
      const file = await updateSingleProductImage(req.files);

      req.imageurl = `${file.destination}/${file.filename}`;
    }
    await agent.Products.create(req);

    dispatch(asyncFinish());
  } catch (error) {
    dispatch(asyncError(error));
    throw error;
  }
};

export const updateProductAsync = (req: IProduct) => async (dispatch) => {
  dispatch(asyncStart());
  try {
    if (req.files && req.files.length > 0) {
      const file = await updateSingleProductImage(req.files);

      req.imageurl = `${file.destination}/${file.filename}`;
    }

    await agent.Products.update(req);

    dispatch(asyncFinish());
  } catch (error) {
    dispatch(asyncError(error));
    throw error;
  }
};

export const deleteProductAsync = (id: number) => async (dispatch) => {
  dispatch(asyncStart());
  try {
    await agent.Products.delete(id);

    dispatch(asyncFinish());
  } catch (error) {
    dispatch(asyncError(error));
    throw error;
  }
};

export const clearProduct = () => {
  return {
    type: CLEAR_PRODUCT,
  };
};
