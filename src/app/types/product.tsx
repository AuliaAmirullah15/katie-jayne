import { StaticImageData } from "next/image";
import { Currency } from "./currency";

export type ProductDetails = {
  title: string;
  description: string;
};

export type Product = {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  currency: Currency;
  image: StaticImageData;
  thumbnails: StaticImageData[];
  details: ProductDetails[];
};
