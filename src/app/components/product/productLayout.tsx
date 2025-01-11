import React, { useState } from "react";
import Image from "next/image";
import product1 from "@/assets/images/jpg/product1.jpg";
import product2 from "@/assets/images/jpg/product2.jpg";
import product3 from "@/assets/images/jpg/product3.jpg";
import product4 from "@/assets/images/jpg/product4.jpg";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import QuantitySelector from "../inputs/quantityControl";

interface ProductLayoutProps {
  productId: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ productId }) => {
  const [activeImage, setActiveImage] = useState(product1);
  const [quantity, setQuantity] = useState(1);
  const thumbnails = [product1, product2, product3, product4];

  console.log("PRODUCT ID: " + productId);

  // IF LATER WE USE API ENDPOINT
  // const [productData, setProductData] = useState<any>(null);
  // const [activeImage, setActiveImage] = useState<string>("");

  // useEffect(() => {
  //   // Simulated fetch based on productId
  //   const fetchProductData = async () => {
  //     const data = await fetch(`/api/products/${productId}`).then((res) =>
  //       res.json()
  //     );
  //     setProductData(data);
  //     setActiveImage(data.images[0]); // Set the first image as the default
  //   };

  //   fetchProductData();
  // }, [productId]);

  // if (!productData) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Thumbnails */}
        <div className="col-span-1 flex flex-col space-y-4">
          {thumbnails.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer rounded-lg border-2 p-0.5 w-full transition-all hover:scale-105 ${
                activeImage === image ? "border-main_brown" : "border-gray-300"
              }`}
              onClick={() => setActiveImage(image)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="col-span-6 flex items-center justify-center">
          <Image
            src={activeImage}
            alt="Active Product"
            className="w-full max-h-[500px] rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Description Section */}
        <div className="col-span-4">
          <h2 className="text-2xl font-semibold mb-4 font-cardo">
            Katie Crystal Square Decanter
          </h2>
          <p className="text-gray-600 mb-6">
            This is a detailed description of the product. It provides
            information about the features, benefits, and usage of the product.
            Customers can make informed decisions based on this description.
          </p>

          <div className="flex items-center space-x-4">
            {/* Add to Cart Button */}
            <PrimaryButton
              type="submit"
              className="mt-2"
              buttonType={ButtonType.Secondary}
            >
              Add To Cart
            </PrimaryButton>

            {/* Quantity Selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
