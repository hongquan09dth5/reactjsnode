import { IProductListItem, IProduct } from "./../../app/model/product";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  CLEAR_PRODUCT,
  FETCH_TOTAL_BY_BRAND
} from "./productConstants";

interface IProductState {
  products: IProductListItem[];
  product: IProduct;
  totalByBrand: any;
}

const defaultState: IProductState = {
  products: [],
  product: null,
  totalByBrand: [],
};

const productReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };
    case FETCH_TOTAL_BY_BRAND:
      return {
        ...state,
        totalByBrand: [...payload],
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
