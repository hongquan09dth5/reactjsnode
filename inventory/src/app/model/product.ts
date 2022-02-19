import { IBaseModel } from "./baseModel";

export interface IProductListItem extends IBaseModel {
  description: string;
  price: number;
  imageurl: string;
}

export interface IProduct extends IProductListItem {
  flex: string;
  frame: string;
  origin: string;
  itemcode: string;
  stringing: string;
  productbrand: number;
  producttypeid: number;
  colors: string;
  files: File[];
}
