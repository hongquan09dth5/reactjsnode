import { IProductListItem, IProduct } from "./../../app/model/product";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  CLEAR_PRODUCT,
} from "./productConstants";

interface IProductState {
  products: IProductListItem[];
  product: IProduct;
}

const defaultState: IProductState = {
  products: [],
  product: null,
};

const productReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };
    case FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
};

export default productReducer;
