import React from "react";
import ProductsCard from "./ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  // console.log(products)
  const [product, setProduct] = useState([])

  const fetchData = async () => {
    const res = await axios.get(
      'http://localhost:8080/api/v1/products',
    )
    const resData = res.data
    const status = res.status
    if (status === 200) {
      if (resData.status === 200) {

        setProduct(resData.data)
        console.log({ dataProduct: resData })
      }
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">

        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {product.map((item) => (
          <tr>
            {item.delete ? (
              <></>
            ) : (
              <ProductsCard key={item.id} product={item} />

            )
            }
          </tr>
        ))}


      </div>

      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
