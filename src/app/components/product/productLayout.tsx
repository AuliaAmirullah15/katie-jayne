import React, { useEffect, useReducer, useState } from "react";
import Image, { StaticImageData } from "next/image";
import QuantitySelector from "../inputs/quantitySelector";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import Accordion from "../accordion/accordion";
import FavoriteButton from "../buttons/favoriteButton";
import quantityReducer from "@/app/reducers/quantityReducer";
import AddToCartButton from "../buttons/addToCartButton";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import { defaultProduct, products } from "@/data/products";
import { Product } from "@/app/types/product";
import { ProductPageProps } from "@/app/types/componentProps";

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

const ProductLayout: React.FC<ProductPageProps> = ({ params }) => {
  const [productCode, setProductCode] = useState("");
  const [activeImage, setActiveImage] = useState(defaultProduct.image);
  const [quantity, dispatch] = useReducer(quantityReducer, 1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [product, setProduct] = useState<Product>(defaultProduct);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  const basketItems = useSelector((state: RootState) => state.basketItems);

  useEffect(() => {
    // DATA GETTER AND SETTER
    params.then((param) => {
      if (param) {
        // WAIT THE PARAMS FROM THE URL, THEN RESET THE PRODUCT
        setProductCode(param.code);

        const product = products.find((product) => product.code === param.code);
        setProduct(product as Product);
      }
    });

    // LOCALSTORAGE QUANTITY SETTER
    const basketItem = basketItems.find((item) => item.code === productCode);
    // console.log("BASKETITEM: ", basketItem, productCode);
    if (basketItem) {
      dispatch({ type: "SET_QUANTITY", payload: basketItem.quantity });
    }
  }, [params, basketItems, productCode]);

  useEffect(() => {
    // TOTAL PRICE WATCHER AND SETTER
    if (product) {
      setTotalPrice(quantity * product.price);
    }
  }, [quantity, product]);

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
              dispatch={dispatch}
              className="w-full md:w-auto justify-center"
            />

            {/* Add to Cart Button */}
            <div className="flex flex-row-reverse md:flex-row space-x-reverse md:space-x-2 space-x-2 w-full md:w-auto">
              <FavoriteButton productCode={product.code} />
              <AddToCartButton
                product={{
                  ...product,
                  quantity: quantity,
                }}
                totalPrice={totalPrice}
              />
            </div>
          </div>

          <div className="mt-4">
            <Accordion contents={product.details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
