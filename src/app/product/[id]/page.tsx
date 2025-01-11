"use client";
import Banner from "@/app/components/banner";
import Footer from "@/app/components/footer";
import FooterBanner from "@/app/components/footerBanner";
import Header from "@/app/components/header";
import React, { useEffect } from "react";
import ProductLayout from "@/app/components/product/productLayout";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { id } = params;

  useEffect(() => {
    console.log("Product ID:", id);
  }, [id]);

  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />

      <ProductLayout productId={id} />

      <FooterBanner />
      <Footer />
    </>
  );
};

export default ProductPage;
