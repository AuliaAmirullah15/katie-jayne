"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/svg/logo.svg";
import magnifyingGlass from "@/assets/images/svg/magnifying_glass.svg";
import heart from "@/assets/images/svg/heart.svg";
import bag from "@/assets/images/svg/bag.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="mx-6 md:mx-12 flex items-center justify-between py-2 md:py-4">
        <div className="flex space-x-8 justify-between">
          <Image src={logo} alt="Katie Jayne" className="w-28 md:w-auto" />
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8 text-gray-800">
              <li className="group relative hover:text-main_brown cursor-pointer">
                Collections
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </li>
              <li className="group relative hover:text-main_brown cursor-pointer">
                New Arrivals
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </li>
              <li className="group relative hover:text-main_brown cursor-pointer">
                Sales
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-6 p-4 text-gray-800 items-center">
          <div className="flex items-center space-x-1">
            <Image src={magnifyingGlass} alt="Search" />
          </div>

          <div className="flex items-center space-x-1">
            <Image src={heart} alt="Favorites" />
            <span className="text-sm md:text-md">0</span>
          </div>

          <div className="flex items-center space-x-1 relative">
            <Image src={bag} alt="Checkout" />
            <span className="text-sm md:text-md">2</span>
          </div>

          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-4 h-[1px] bg-gray-800 mb-[4px]"></div>
            <div className="w-4 h-[1px] bg-gray-800 mb-[4px]"></div>
            <div className="w-4 h-[1px] bg-gray-800"></div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
          <nav className="space-y-6 text-gray-800 text-xl">
            <div
              className="absolute top-4 right-6 text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </div>
            <ul className="flex flex-col items-center space-y-6">
              <li className="cursor-pointer hover:text-main_brown">
                Collections
              </li>
              <li className="cursor-pointer hover:text-main_brown">
                New Arrivals
              </li>
              <li className="cursor-pointer hover:text-main_brown">Sales</li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}