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
    <div className="lg:container mx-auto md:px-4 md:py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Thumbnails - Inline on small screens, stacked on larger screens */}
        <div className="hidden col-span-12 md:flex mb-6 md:col-span-1 md:flex-col md:space-y-4">
          {thumbnails.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer rounded-lg border-2 p-0.5 transition-all hover:scale-105 ${
                activeImage === image ? "border-main_brown" : "border-gray-300"
              }`}
              onClick={() => setActiveImage(image)}
              width={100}
              height={100}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="col-span-12 md:col-span-6 flex items-center justify-center mb-4 md:mb-0">
          <Image
            src={activeImage}
            alt="Active Product"
            className="w-full max-h-[500px] md:rounded-lg object-cover md:shadow-md"
          />
        </div>

        {/* Description Section */}
        <div className="col-span-12 md:col-span-4 mx-4 md:mx-0">
          <h2 className="text-center md:text-left text-2xl font-semibold mb-4 font-cardo">
            Katie Crystal Square Decanter
          </h2>
          <p className="text-gray-600 mb-6">
            This is a detailed description of the product. It provides
            information about the features, benefits, and usage of the product.
            Customers can make informed decisions based on this description.
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:gap-x-4 lg:flex-row-reverse lg:justify-end">
            {/* Quantity Selector */}
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              className="w-full md:w-auto justify-center"
            />

            {/* Add to Cart Button */}
            <PrimaryButton
              type="submit"
              className="w-full md:w-auto mt-2 md:mt-0 mx-0"
              buttonType={ButtonType.Secondary}
            >
              Add To Cart
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;