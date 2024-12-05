import { tproduct } from "@/index";
import axios from "axios";

export async function getProduct(): Promise<tproduct[]> {
  const product = await axios.request({
    method: "GET",
    url: "https://fakestoreapi.com/products",
  })


  return product.data;
}
