import Banner from "@/app/components/banner";
import Header from "@/app/components/header";
import React from "react";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <>
      <Banner bannerText="Complimentary shipping on orders of £100 or more. Shop now" />
      <Header />
      <p>ID: {id}</p>
    </>
  );
};

export default ProductPage;
