import Image from "next/image";
import logo from "@/assets/images/svg/logo.svg";
import magnifyingGlass from "@/assets/images/svg/magnifying_glass.svg";
import heart from "@/assets/images/svg/heart.svg";
import bag from "@/assets/images/svg/bag.svg";

export default function Header() {
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
        <div className="flex space-x-6 p-4 text-gray-800">
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
        </div>
      </div>
    </header>
  );
}
