"use client";
import Image from "next/image";
import heroUrl from "@/assets/images/jpg/hero.jpg";
import heroMobileUrl from "@/assets/images/jpg/heroMobile.jpg";
import PrimaryButton, { ButtonType } from "./buttons/primaryButton";
import { useEffect, useState } from "react";

export default function Hero() {
  const [height, setHeight] = useState(300);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const baseHeight = window.innerWidth < 768 ? 500 : 300;
      const ratio = windowWidth / windowHeight;
      const newHeight = baseHeight * ratio;

      setHeight(newHeight);
      setIsMobile(window.innerWidth < 768); // 768px is tailwind's md breakpoint
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="md:relative flex flex-col md:flex-row w-full">
      <div className="relative w-full" style={{ height: `${height}px` }}>
        <Image
          src={isMobile ? heroMobileUrl : heroUrl}
          alt="Beautiful handcrafted glassware showcased on a table"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="w-full md:absolute md:inset-0 flex flex-col items-start justify-center px-6 py-4">
        <div className="text-left md:max-w-lg md:mx-6">
          <h1 className="text-4xl lg:text-6xl mb-4 font-cardo text-main_brown md:text-white">
            Masterfully crafted glassware
          </h1>
          <div className="flex flex-col-reverse md:flex-col">
            <p className="text-md lg:text-lg mb-6 text-black md:text-white">
              Discover the beauty of handcrafted glassware, where each piece is
              shaped by skilled artisans using traditional techniques. Every
              glass is a unique work of art, crafted to bring a touch of
              timeless beauty and expert craftsmanship to your table.
            </p>
            <div className="pb-8 md:pb-0">
              <PrimaryButton buttonType={ButtonType.Primary}>
                Shop Now
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
