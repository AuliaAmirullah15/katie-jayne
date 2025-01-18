"use client";
import Banner from "@/app/components/banner";
import Footer from "@/app/components/footer";
import FooterBanner from "@/app/components/footerBanner";
import Header from "@/app/components/header";
import React from "react";
import ProductLayout from "@/app/components/product/productLayout";
import MoreLikeThis from "@/app/components/product/moreLikeThis";
import RecentlyViewed from "@/app/components/product/recentlyViewed";
import { ProductPageProps } from "@/app/types/componentProps";

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />

      <ProductLayout params={params} />
      <MoreLikeThis />
      <RecentlyViewed />

      <FooterBanner />
      <Footer />
    </>
  );
};

export default ProductPage;
