import { Product } from "@/app/types/product";

export default interface BasketItem extends Product {
  quantity: number;
}
