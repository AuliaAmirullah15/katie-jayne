"use client";
import Banner from "@/app/components/header/banner";
import Footer from "@/app/components/footer/footer";
import FooterBanner from "@/app/components/footer/footerBanner";
import Header from "@/app/components/header/header";
import React from "react";
import ProductLayout from "@/app/components/product/productLayout";
import MoreLikeThis from "@/app/components/product/moreLikeThis";
import RecentlyViewed from "@/app/components/product/recentlyViewed";
import { ProductPageProps } from "@/app/types/componentProps";
import ContentLayout from "@/app/components/layouts/contentLayout";

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />
      <ContentLayout>
        <ProductLayout params={params} />
        <MoreLikeThis />
        <RecentlyViewed />
      </ContentLayout>

      <FooterBanner />
      <Footer />
    </>
  );
};

export default ProductPage;
