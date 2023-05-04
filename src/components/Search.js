/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProduct] = useState([])
    const fetchData = async () => {
        const res = await axios.get(
            'http://localhost:8080/api/v1/products',
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

    const onSearch = async (name) => {
        const token = localStorage.getItem('token')

        const res = await axios.get(
            'http://localhost:8080/api/v1/products/searchByName/' + name,
            // { mode: 'cors' },
            { headers: { Authorization: `Bearer ${token}` } },
        )
        const resData = res.data

        const status = res.status
        if (status === 200) {
            if (resData.status === 200) {
                setProduct(resData.data)
                console.log({ searchProduct: resData })
            }
        }
    }

    const id = products.prodName;
    const idString = (id) => {
        return String(id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(id);
    const handleDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: products,
            },
        });
    };


    return (

        <div className="shop-container">
            <div className="container">
                <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5"
                    type="search"
                    name="src"
                    placeholder="Tìm Kiếm"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            <section class="products-shop section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="row align-items-center">
                                <div class="col-lg-12 mb-4 mb-lg-0">

                                    <div class="section-title">

                                        <h2 class="d-block text-left-sm">Shop</h2>

                                        <div class="heading d-flex justify-content-between mb-5">
                                            <p class="result-count mb-0"> Showing 1–6 of 17 results</p>
                                            <form class="ordering " method="get">
                                                <select name="orderby" class="orderby form-control" aria-label="Shop order" >
                                                    <option value="" selected="selected">Default sorting</option>
                                                    <option value="">Sort by popularity</option>
                                                    <option value="">Sort by average rating</option>
                                                    <option value="">Sort by latest</option>
                                                    <option value="">Sort by price: low to high</option>
                                                    <option value="">Sort by price: high to low</option>
                                                </select>
                                                <input type="hidden" name="paged" value="1" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                {products.map((item) => (
            
                                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" >
                                        <div class="product"
                                        >
                                            <div class="product-wrap">

                                                <a><img class="img-fluid w-100 mb-3 img-first" src={item.prodImage} alt="product-img" /></a>
                                                <a><img class="img-fluid w-100 mb-3 img-second" src={item.prodImage} alt="product-img" /></a>
                                            </div>

                                            <span class="onsale">Sale</span>
                                            <div class="product-hover-overlay">
                                                <a>
                                                    <i class="tf-ion-android-cart"
                                                        onClick={() =>
                                                            dispatch(
                                                                addToCart({
                                                                    id: item.id,
                                                                    prodName: item.prodName,
                                                                    prodImage: item.prodImage,
                                                                    prodPrice: item.prodPrice,
                                                                    quantity: 1,
                                                                    prodDescription: item.prodDescription,
                                                                })
                                                            ) & toast.success(`${item.prodName} is added`)
                                                        }
                                                    // className="absolute z-20 w-[60px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-10 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
                                                    >
                                                    </i>
                                                </a>
                                                <a href="#"><i class="tf-ion-ios-heart"></i></a>
                                            </div>

                                            <div class="product-info">
                                                <h2 class="product-title h5 mb-0"><a>{item.prodName}</a></h2>
                                                <span class="price">
                                                    ${item.prodPrice}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div class="col-12">
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <form class="mb-5">
                                <section class="widget widget-colors mb-5">
                                    <h3 class="widget-title h4 mb-4">Shop by color</h3>
                                    <ul class="list-inline">
                                        <li class="list-inline-item mr-4">
                                            <div class="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="color1" />
                                                <label class="custom-control-label sky-blue" for="color1"></label>
                                            </div>
                                        </li>
                                        <li class="list-inline-item mr-4">
                                            <div class="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="color2" checked />
                                                <label class="custom-control-label red" for="color2"></label>
                                            </div>
                                        </li>
                                        <li class="list-inline-item mr-4">
                                            <div class="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="color3" />
                                                <label class="custom-control-label dark" for="color3"></label>
                                            </div>
                                        </li>
                                        <li class="list-inline-item mr-4">
                                            <div class="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="color4" />
                                                <label class="custom-control-label magenta" for="color4"></label>
                                            </div>
                                        </li>
                                        <li class="list-inline-item mr-4">
                                            <div class="custom-control custom-checkbox color-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="color5" />
                                                <label class="custom-control-label yellow" for="color5"></label>
                                            </div>
                                        </li>
                                    </ul>
                                </section>


                                <section class="widget widget-sizes mb-5">
                                    <h3 class="widget-title h4 mb-4">Shop by Sizes</h3>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size1" checked />
                                        <label class="custom-control-label" for="size1">L Large</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size2" />
                                        <label class="custom-control-label" for="size2">XL Extra Large</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size3" />
                                        <label class="custom-control-label" for="size3">M Medium</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size4" />
                                        <label class="custom-control-label" for="size4">S Small</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="size5" />
                                        <label class="custom-control-label" for="size5">XS Extra Small</label>
                                    </div>
                                </section>

                                <button type="button" class="btn btn-black btn-small">Filter</button>
                            </form>


                            <section class="widget widget-popular mb-5">
                                <h3 class="widget-title mb-4 h4">Popular Products</h3>
                                <a class="popular-products-item media" href="/product-single">
                                    <img src="assets/images/p-1.jpg" alt="" class="img-fluid mr-4" />
                                    <div class="media-body">
                                        <h6>Contrast <br />Backpack</h6>
                                        <span class="price">$45</span>
                                    </div>
                                </a>

                                <a class="popular-products-item media" href="/product-single">
                                    <img src="assets/images/p-2.jpg" alt="" class="img-fluid mr-4" />
                                    <div class="media-body">
                                        <h6>Hoodie with <br />Logo</h6>
                                        <span class="price">$45</span>
                                    </div>
                                </a>

                                <a class="popular-products-item media" href="/product-single">
                                    <img src="assets/images/p-3.jpg" alt="" class="img-fluid mr-4" />
                                    <div class="media-body">
                                        <h6>Traveller<br />Backpack</h6>
                                        <span class="price">$45</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default Search;