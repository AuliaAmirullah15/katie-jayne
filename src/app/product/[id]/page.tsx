import React from "react";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductPage;
