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

const MenuItem = ({ menu }: { menu: Menu }) => {
  const menuWithoutImages = menu.children
    ? menu.children.filter((menuChild) => !menuChild.image)
    : [];
  const menuWithImages = menu.children
    ? menu.children.filter((menuChild) => menuChild.image)
    : [];
  const columnX =
    menuWithImages.length == 0
      ? "columns-6"
      : "columns-" + (6 - menuWithImages.length);

  return (
    <li className="group relative cursor-pointer px-6 flex flex-row items-stretch justify-between h-full grow">
      <div className="group flex flex-row items-center relative hover:text-main_brown">
        <span className="relative z-50">{menu.label}</span>
        <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full z-50"></span>
      </div>
      {/* Full-Screen Dropdown Menu */}
      {menu.children && (
        <div className="fixed top-[84px] left-0 w-screen bg-white shadow-lg z-40 flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
          <div className="flex flex-row space-x-1 border-gray-200 border-t-2 w-full">
            {menuWithoutImages.length > 0 && (
              <div className={`${columnX} mx-12 my-6 w-full relative group`}>
                {menuWithoutImages.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col mb-6 break-inside-avoid"
                  >
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
            )}
            {menuWithImages.length > 0 &&
              menuWithImages.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col pb-2 h-full border-gray-200 border-x-2 w-[200px] flex-shrink-0"
                >
                  {/* Parent flex container allowing grow */}
                  <div className="flex flex-col grow relative w-full h-full">
                    <Image
                      src={item.image ? item.image : ""}
                      alt={item.label}
                      className="object-cover w-full h-full"
                      fill
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="flex-1 flex flex-col space-y-4 py-6 px-2">
                    <div className="flex flex-row justify-between">
                      <h2 className="text-md uppercase font-semibold">
                        {item.label}
                      </h2>
                      <Image
                        src={item.icon ?? ""}
                        alt={item.label}
                        height={18}
                        width={18}
                      />
                    </div>
                    <p className="text-sm text-gray-500">{item.caption}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </li>
  );
};

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
      <div className="mx-6 md:mx-12 flex items-stretch justify-between">
        {/* Logo and Navigation */}
        <div className="flex space-x-8 justify-between">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={logo}
              alt="Katie Jayne"
              className="w-24 md:w-auto cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>

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
