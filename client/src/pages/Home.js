import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroBannerRight from "../components/Hero-Right";
import HeroBannerLeft from "../components/Hero-Left";
import HeroQuad from "../components/Hero-Quad";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
    <div className="container">
      <Header/>
      <HeroQuad/>
      <HeroBannerRight/>
      
      <FeaturedProducts/>
      <HeroBannerLeft/>
     
      <Cart />
      
    </div>
    <Footer/>
    </>
  );
};

export default Home;
