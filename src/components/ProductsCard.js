import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  // console.log(product)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = product.prodName;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  
  return (
    <div className="w-full relative group">
      <div
        onClick={handleDetails}
        className="w-full h-80 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.prodImage}
          alt="productImg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.prodName}
            </h2>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            {/* <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500"> */}
            <p className="font-semibold">${product.prodPrice}</p>
            {/* </div> */}
          </div>
        </div>
        <div>
          <p>{product.productType}</p>
          <p
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  prodName: product.prodName,
                  prodImage: product.prodImage,
                  prodPrice: product.prodPrice,
                  quantity: 1,
                  prodDescription: product.prodDescription,
                })
              ) & toast.success(`${product.prodName} is added`)
            }
            className="text-right"
          // className="absolute z-20 w-[60px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-10 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
          >
            <button><i class="tf-ion-android-cart"></i></button>
          </p>
        </div>

      </div>
      <div className="absolute top-4 right-0">
        {product.prodPrice && (
          <p className="onsale">
            Sale
          </p>
        )}
      </div>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductsCard;
