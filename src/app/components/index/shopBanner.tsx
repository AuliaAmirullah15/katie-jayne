"use client";
import banner1 from "@/assets/images/jpg/banner1.jpg";
import banner2 from "@/assets/images/jpg/banner2.jpg";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { useState, useEffect } from "react";

export default function ShopBanner() {
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const updateSize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const baseHeight = window.innerWidth < 768 ? 1500 : 300;
      const ratio = windowWidth / windowHeight;
      const newHeight = baseHeight * ratio;

      setHeight(newHeight);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="mx-6 md:mx-12 flex space-x-0 md:space-x-6 space-y-6 md:space-y-0 flex-col md:flex-row"
      style={{ height: `${height}px` }}
    >
      <div
        className="flex-1 bg-cover bg-center relative h-full"
        style={{ backgroundImage: `url(${banner1.src})` }}
      >
        <PrimaryButton
          className="absolute bottom-4 left-2"
          buttonType={ButtonType.Ternary}
        >
          Shop Crystal
        </PrimaryButton>
      </div>

      <div
        className="flex-1 bg-cover bg-center relative h-full"
        style={{ backgroundImage: `url(${banner2.src})` }}
      >
        <PrimaryButton
          className="absolute bottom-4 left-2"
          buttonType={ButtonType.Ternary}
        >
          Shop Essentials
        </PrimaryButton>
      </div>
    </div>
  );
}
