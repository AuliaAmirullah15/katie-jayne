"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/svg/logo.svg";
import magnifyingGlass from "@/assets/images/svg/magnifying_glass.svg";
import heart from "@/assets/images/svg/heart.svg";
import bag from "@/assets/images/svg/bag.svg";
import unitedKingdom from "@/assets/images/svg/united_kingdom.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import Overlay from "../layouts/overlay";
import { menuItems, Menu, coreLinks } from "@/data/headerLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";

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
      <div className="fixed top-[84px] left-0 w-screen h-[calc(100vh-350px)] bg-white shadow-lg z-40 pl-2 flex opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        <div className="ml-60 mt-12 columns-1 sm:columns-2 md:columns-3 gap-12">
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
                    {child}
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
      <Overlay
        isVisible={menuOpen}
        className="lg:hidden"
        onClose={() => setMenuOpen(false)}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="w-full flex flex-row items-center justify-center p-6 border-gray-200 border-b-2">
              <Image
                src={logo}
                alt="Katie Jayne"
                className="w-36 cursor-pointer "
                onClick={handleLogoClick}
              />
            </div>
            <nav className="space-y-4 text-gray-800 text-lg p-6 border-gray-200 border-b-2">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((menu, key) => (
                  <li
                    key={key}
                    className={`cursor-pointer hover:text-main_brown transition-all duration-300 ${menu.style}`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{menu.label}</span>
                      {/* Right arrow icon */}
                      <span className="ml-2">
                        <FontAwesomeIcon icon={faChevronRight} size="sm" />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-[full] m-4 flex flex-row items-center justify-center">
              <div className="flex flex-col w-full md:w-[50%] items-center justify-center text-center">
                <h4 className="text-lg mb-4">
                  Become a Katie Jayne Member today for the best products,
                  inspiration and offers.{" "}
                  <span className="font-semibold underline">Learn More</span>
                </h4>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <PrimaryButton
                    type="submit"
                    className="w-auto md:mt-0 mx-0 text-md flex-auto"
                    buttonType={ButtonType.Secondary}
                  >
                    Join Us
                  </PrimaryButton>
                  <PrimaryButton
                    type="submit"
                    className="w-auto md:mt-0 mx-0 text-md flex-auto"
                    buttonType={ButtonType.Outlined}
                  >
                    Sign In
                  </PrimaryButton>
                </div>
              </div>
            </div>
            <nav className="space-y-4 text-gray-800 text-lg px-6 py-4">
              <ul className="flex flex-col space-y-3">
                {coreLinks.map((link, key) => (
                  <li
                    key={key}
                    className="cursor-pointer hover:text-main_brown transition-all duration-300"
                  >
                    <div className="flex flex-row justify-start w-full space-x-2">
                      <Image src={link.icon} alt={link.label} width={24} />
                      <span>{link.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-row space-x-3 left-0 w-full p-4 bg-white border-t border-gray-300">
            <Image src={unitedKingdom} alt="UK Flag" width={30} height={30} />
            <p className="text-lg hover:text-main_brown transition-all duration-300 hover:cursor-pointer">
              United Kingdom
            </p>
          </div>
        </div>
      </Overlay>
    </header>
  );
}
