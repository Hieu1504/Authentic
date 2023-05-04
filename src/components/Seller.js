import React from "react";
import ProductsCard from "./ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Sellers = () => {
    const [products, setProduct] = useState([])
    const fetchData = async () => {
        const res = await axios.get(
            'http://localhost:8080/api/v1/products/getByPaging?pageNumber=0&pageSize=4',
        )
        const resData = res.data
        console.log({ res })
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
        <div>
            <section class="ads section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 offset-lg-6">
                            <div class="ads-content">
                                <span class="h5 deal">Deal of the day 50% Off</span>
                                <h2 class="mt-3 text-white">Trendy Suit</h2>
                                <p class="text-md mt-3 text-white">Hurry up! Limited time offer.Grab ot now!</p>

                                <div id="simple-timer" class="syotimer mb-5"></div>
                                <a href="/search" class="btn btn-main"><i class="ti-bag mr-2"></i>Shop Now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section products-list">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12 col-md-12">
                            <img src="assets/images/adsv.jpg" alt="Product big thumb" class="img-fluid w-100" />
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="widget-featured-entries mt-5 mt-lg-0">
                                <h4 class="mb-4 pb-3">Best selllers</h4>
                                {products.map((item) => (

                                    <div class="media mb-3">
                                        <a class="featured-entry-thumb" href="/product-single">
                                            <img src={item.prodImage} alt="Product thumb" width="64" class="img-fluid mr-3" />
                                        </a>
                                        <div class="media-body">
                                            <h6 class="featured-entry-title mb-0"><a href="/single-product">{item.prodName}</a></h6>
                                            <p class="featured-entry-meta">${item.prodPrice}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="widget-featured-entries mt-5 mt-lg-0">
                                <h4 class="mb-4 pb-3">New Arrivals</h4>
                                <div class="media mb-3">
                                    <a class="featured-entry-thumb" href="/product-single">
                                        <img src="assets/images/p-7.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                                    </a>
                                    <div class="media-body">
                                        <h6 class="featured-entry-title mb-0"><a href="#">Keds - Kickstart Pom Pom</a></h6>
                                        <p class="featured-entry-meta">$42.99</p>
                                    </div>
                                </div>
                                <div class="media mb-3">
                                    <a class="featured-entry-thumb" href="#">
                                        <img src="assets/images/p-8.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                                    </a>
                                    <div class="media-body">
                                        <h6 class="featured-entry-title mb-0"><a href="#">Nike - Brasilia Medium Backpack</a></h6>
                                        <p class="featured-entry-meta">$27.99</p>
                                    </div>
                                </div>
                                <div class="media mb-3">
                                    <a class="featured-entry-thumb" href="#">
                                        <img src="assets/images/p-1.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                                    </a>
                                    <div class="media-body">
                                        <h6 class="featured-entry-title mb-0"><a href="#">Guess - GU7295</a></h6>
                                        <p>$38.00</p>
                                    </div>
                                </div>
                                <div class="media mb-3">
                                    <a class="featured-entry-thumb" href="#">
                                        <img src="assets/images/p-2.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                                    </a>
                                    <div class="media-body">
                                        <h6 class="featured-entry-title mb-0"><a href="#">Adidas Originals Cap</a></h6>
                                        <p class="featured-entry-meta">$35.00</p>
                                    </div>
                                </div>
                                <div class="media">
                                    <a class="featured-entry-thumb" href="#">
                                        <img src="assets/images/p-4.jpg" alt="Product thumb" width="64" class="img-fluid mr-3" />
                                    </a>
                                    <div class="media-body">
                                        <h6 class="featured-entry-title mb-0"><a href="#">Big Star Flip Tops</a></h6>
                                        <p class="featured-entry-meta">$10.60</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="features border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="feature-block">
                                <i class="tf-ion-android-bicycle"></i>
                                <div class="content">
                                    <h5>Free Shipping</h5>
                                    <p>On all order over $39.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="feature-block">
                                <i class="tf-wallet"></i>
                                <div class="content">
                                    <h5>30 Days Return</h5>
                                    <p>Money back Guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="feature-block">
                                <i class="tf-key"></i>
                                <div class="content">
                                    <h5>Secure Checkout</h5>
                                    <p>100% Protected by paypal</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6">
                            <div class="feature-block">
                                <i class="tf-clock"></i>
                                <div class="content">
                                    <h5>24/7 Support</h5>
                                    <p>All time customer support </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sellers;
