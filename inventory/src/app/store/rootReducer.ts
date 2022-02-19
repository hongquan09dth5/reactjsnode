import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import asyncReducer from "./asyncReducer";
import productReducer from './../../features/product/productReducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    async: asyncReducer,
    product: productReducer,
  });

export default rootReducer;
