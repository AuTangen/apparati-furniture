import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroBannerRight from "../components/Hero-Right";
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
    return (
        <>
        <div className="container product-page">
            <Link to="/">← Back to Home</Link>
            <CategoryMenu />
            <div className="">
            <ProductList />
            </div>
            <Cart />
        </div>
        </>
    );
};

export default ProductPage;
