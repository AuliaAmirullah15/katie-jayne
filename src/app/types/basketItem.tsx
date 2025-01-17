import { Currency } from "@/app/types/currency";
import { StaticImageData } from "next/image";

export default interface BasketItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: Currency;
  thumbnails: StaticImageData[];
  quantity: number;
}
