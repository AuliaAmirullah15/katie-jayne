"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/svg/logo.svg";
import magnifyingGlass from "@/assets/images/svg/magnifying_glass.svg";
import heart from "@/assets/images/svg/heart.svg";
import bag from "@/assets/images/svg/bag.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import Overlay from "../layouts/overlay";

const MENU_ITEMS = ["Collections", "New Arrivals", "Sales"];

interface IconProps {
  src: string;
  alt: string;
  badge?: string;
}

const MenuItem = ({ children }: { children: React.ReactNode }) => (
  <li className="group relative hover:text-main_brown cursor-pointer">
    {children}
    <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
  </li>
);

const ActionIcon = ({ src, alt, badge }: IconProps) => (
  <div className="flex items-center space-x-1">
    <Image src={src} alt={alt} />
    {badge && <span className="text-sm md:text-md">{badge}</span>}
  </div>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const favorites = useSelector((state: RootState) => state.favorites);
  const basketItems = useSelector((state: RootState) => state.basketItems);
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const ICONS: IconProps[] = [
    { src: magnifyingGlass, alt: "Search" },
    { src: heart, alt: "Favorites", badge: favorites.length.toString() },
    { src: bag, alt: "Checkout", badge: basketItems.length.toString() },
  ];

  const handleLogoClick = () => {
    if (router) {
      router.push("/"); // This ensures the click works correctly
    }
  };

  return (
    <header className="bg-white shadow sticky top-[35px] z-40">
      <div className="mx-6 md:mx-12 flex items-center justify-between py-2">
        {/* Logo and Navigation */}
        <div className="flex space-x-8 justify-between">
          <Image
            src={logo}
            alt="Katie Jayne"
            className="w-24 md:w-auto cursor-pointer"
            onClick={handleLogoClick}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8 text-gray-800 text-sm">
              {MENU_ITEMS.map((item) => (
                <MenuItem key={item}>{item}</MenuItem>
              ))}
            </ul>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex space-x-6 p-4 text-gray-800 items-center">
          {ICONS.map(({ src, alt, badge }) => (
            <ActionIcon key={alt} src={src} alt={alt} badge={badge} />
          ))}

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-4 h-[1px] bg-gray-800 mb-[4px]"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Navbar */}
      <Overlay
        isVisible={menuOpen}
        onClose={() => setMenuOpen(false)}
        className="items-center justify-center"
      >
        <nav className="space-y-6 text-gray-800 text-xl">
          <ul className="flex flex-col items-center space-y-6">
            {MENU_ITEMS.map((item) => (
              <li key={item} className="cursor-pointer hover:text-main_brown">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </Overlay>
    </header>
  );
}
