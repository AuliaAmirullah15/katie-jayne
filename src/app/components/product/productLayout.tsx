import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import product1 from "@/assets/images/jpg/product1.jpg";
import product2 from "@/assets/images/jpg/product2.jpg";
import product3 from "@/assets/images/jpg/product3.jpg";
import product4 from "@/assets/images/jpg/product4.jpg";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import QuantitySelector from "../inputs/quantityControl";
import { formatCurrency } from "@/utils/currencyFormatter";

interface ProductLayoutProps {
  productId: string;
}

const Thumbnails = ({
  images,
  activeImage,
  onActiveImage,
}: {
  images: StaticImageData[];
  activeImage: StaticImageData;
  onActiveImage: (image: StaticImageData) => void;
}) => {
  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`cursor-pointer rounded-lg border-2 p-0.5 transition-all hover:scale-105 ${
            activeImage === image ? "border-main_brown" : "border-gray-300"
          } 
           w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[120px] lg:h-[120px]`}
          onClick={() => onActiveImage(image)}
        />
      ))}
    </>
  );
};

const ProductLayout: React.FC<ProductLayoutProps> = ({ productId }) => {
  const [activeImage, setActiveImage] = useState(product1);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const product = {
    id: "product01",
    name: "Katie Crystal Square Decanter",
    description:
      "Add a touch of class to your drinks cabinet with the Katie Crystal Square Decanter—a charming blend of understated style and practicality that feels right at home in any setting. Made from beautifully clear, high-quality crystal, this decanter is as sturdy as it is elegant, perfect for showing off your favourite tipple, whether it’s whisky, gin, or a splash of sherry.",
    price: 5,
    currency: "GBP" as const,
    thumbnails: [product1, product2, product3, product4],
  };

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

  useEffect(() => {
    setTotalPrice(quantity * product.price);
  }, [quantity, product.price]);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle mouse move to change image position during zoom
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isZooming) return;

    const { clientX, clientY } = event;
    const img = event.currentTarget as HTMLElement;
    const { top, left, width, height } = img.getBoundingClientRect();

    // Calculate the position of the cursor relative to the image
    const xPos = ((clientX - left) / width) * 100;
    const yPos = ((clientY - top) / height) * 100;

    setCursorPosition({ x: xPos, y: yPos });
  };

  return (
    <div className="lg:container mx-auto md:px-4 md:py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 flex flex-col-reverse md:flex-row space-x-0 md:space-x-4 space-y-8 space-y-reverse md:space-y-0">
          {/* Thumbnails  */}
          <div className="flex mb-6 md:mb-0 flex-row md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4 justify-center md:justify-start">
            <Thumbnails
              images={product.thumbnails}
              activeImage={activeImage}
              onActiveImage={setActiveImage}
            />
          </div>

          {/* Main Image for Desktop*/}
          <div
            className="hidden md:flex flex-auto items-start relative group overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
          >
            {/* Image container with zoom and pan functionality */}
            <div
              className="w-full h-full flex flex-auto relative max-h-[500px] cursor-zoom-in transition-transform duration-300 ease-in-out transform"
              style={{
                backgroundImage: `url(${activeImage.src})`,
                backgroundSize: isZooming ? "200%" : "100%", // Change zoom level based on hover
                backgroundPosition: `${cursorPosition.x}% ${cursorPosition.y}%`, // Pan image based on cursor
                backgroundRepeat: "no-repeat",
                transform: isZooming ? "scale(1.5)" : "scale(1)", // Scale the image when zooming
              }}
            >
              {/* Image component for small screen */}
              <Image
                src={activeImage}
                alt="Active Product"
                className="object-cover w-full max-h-[500px] h-full opacity-100 md:opacity-0" // Visible on small screens and hidden on large screens
                layout="fill"
              />
            </div>
          </div>

          {/* Main image for mobile screens */}
          <div className="flex md:hidden flex-auto items-start">
            <Image
              src={activeImage}
              alt="Active Product"
              className="w-full max-h-[500px] md:rounded-lg object-cover md:shadow-md"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="col-span-12 md:col-span-5 mx-4 md:mx-0">
          <h2 className="text-center md:text-left text-2xl font-semibold mb-4 font-cardo">
            {product.name}
          </h2>
          <p className="text-center md:text-left text-xl mb-4">
            {formatCurrency(product.price, product.currency)}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

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
              className="w-full md:w-auto mt-2 md:mt-0 mx-0 text-lg"
              buttonType={ButtonType.Secondary}
            >
              Add To Cart {formatCurrency(totalPrice, product.currency)}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
