/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";

export async function productsData() {
  // const products = await axios.get(
  //   "https://fakestoreapiserver.reactbd.com/products"
  // );

  const products = await axios.get(
    'http://localhost:8080/api/v1/products'
  );
  return products;
}
