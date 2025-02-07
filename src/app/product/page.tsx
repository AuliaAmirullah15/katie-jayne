"use client";
import Banner from "@/app/components/header/banner";
import Footer from "@/app/components/footer/footer";
import FooterBanner from "@/app/components/footer/footerBanner";
import Header from "@/app/components/header/header";
import React from "react";
import ContentLayout from "@/app/components/layouts/contentLayout";

const ProductListingPage = () => {
  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />
      <ContentLayout>
        <p>Product Listing</p>
      </ContentLayout>

      <FooterBanner />
      <Footer />
    </>
  );
};

export default ProductListingPage;
