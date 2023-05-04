import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Sellers from "./components/Seller";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <section class="category section pt-3 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="assets/images/cat-1.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Stylish Leather watch</p>
                  <h4 class="mb-4">up to <strong>50% </strong>off</h4>
                  <a href="/search" class="read-more">Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="assets/images/cat-2.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Ladies hand bag</p>
                  <h4 class="mb-4">up to <strong>40% </strong>off</h4>
                  <a href="/search" class="read-more">Shop now</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item">
                <img src="assets/images/cat-3.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Trendy shoe</p>
                  <h4 class="mb-4">up to <strong>50% </strong>off</h4>
                  <a href="/search" class="read-more">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products products={products} />
      <Sellers />
    </div>
  );
};

export default Home;
