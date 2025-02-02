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
import { menuItems, Menu } from "@/data/headerLinks";
import MobileNavbar from "./mobileNavbar";

interface IconProps {
  src: string;
  alt: string;
  badge?: string;
  link?: string;
}

const MenuItem = ({ menu }: { menu: Menu }) => (
  <li className="group relative cursor-pointer px-6">
    <div className="group relative hover:text-main_brown">
      <span className="relative z-50">{menu.label}</span>
      <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full z-50"></span>
    </div>
    {/* Full-Screen Dropdown Menu */}
    {menu.children && (
      <div className="fixed top-[84px] left-0 w-screen bg-white shadow-lg z-40 pl-2 flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        <div className="ml-60 mt-12 mb-8 columns-1 sm:columns-2 md:columns-3 gap-12">
          {menu.children.map((item, index) => (
            <div key={index} className="flex flex-col mb-6 break-inside-avoid">
              <h2 className="text-black text-lg mb-4 font-semibold">
                {item.label}
              </h2>
              {item.children &&
                item.children.map((child, childIndex) => (
                  <p
                    key={childIndex}
                    className="text-gray-600 mb-2 hover:text-main_brown transition-all duration-300"
                  >
                    {child.label}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </li>
);

const ActionIcon = ({ src, alt, badge, link }: IconProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div
      className="flex items-center space-x-1 cursor-pointer"
      onClick={handleClick}
    >
      <Image src={src} alt={alt} />
      {badge && <span className="text-sm md:text-md">{badge}</span>}
    </div>
  );
};

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
    {
      src: heart,
      alt: "Favorites",
      badge: favorites.length.toString(),
      link: "/favorites",
    },
    {
      src: bag,
      alt: "Checkout",
      badge: basketItems.length.toString(),
      link: "/checkout",
    },
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
            <ul className="flex text-gray-800 text-sm">
              {menuItems.map((menu, key) => (
                <MenuItem key={key} menu={menu} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex space-x-6 p-4 text-gray-800 items-center">
          {ICONS.map(({ src, alt, badge, link }) => (
            <ActionIcon
              key={alt}
              src={src}
              alt={alt}
              badge={badge}
              link={link}
            />
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
      <MobileNavbar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
