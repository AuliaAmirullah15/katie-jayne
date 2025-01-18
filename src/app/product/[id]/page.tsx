"use client";
import Banner from "@/app/components/banner";
import Footer from "@/app/components/footer";
import FooterBanner from "@/app/components/footerBanner";
import Header from "@/app/components/header";
import React, { useState, useEffect } from "react";
import ProductLayout from "@/app/components/product/productLayout";
import MoreLikeThis from "@/app/components/product/moreLikeThis";

type ProductPageProps = {
  params: { productId: string };
};

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [productId, setProductId] = useState("");

  useEffect(() => {
    // Directly set the productId from params
    setProductId(params.productId);
  }, [params.productId]);

  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />

      <ProductLayout params={{ productId }} />
      <MoreLikeThis />

      <FooterBanner />
      <Footer />
    </>
  );
};

export default ProductPage;
