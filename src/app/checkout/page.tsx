"use client";
import Banner from "@/app/components/header/banner";
import Footer from "@/app/components/footer/footer";
import FooterBanner from "@/app/components/footer/footerBanner";
import Header from "@/app/components/header/header";
import React from "react";
import Cart from "../components/cart/cart";

const ProductPage = () => {
  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />

      <Cart />

      <FooterBanner />
      <Footer />
    </>
  );
};

export default ProductPage;
