"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Overlay from "../layouts/overlay";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { menuItems, coreLinks, Menu, MenuItem } from "@/data/headerLinks";
import logo from "@/assets/images/svg/logo.svg";
import unitedKingdom from "@/assets/images/svg/united_kingdom.svg";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileSubMenuProps extends MobileNavbarProps {
  menu: Menu;
  onBack: () => void;
}

interface MobileChildrenSubMenuProps extends MobileNavbarProps {
  menuItem: MenuItem;
  onBack: () => void;
}

const ChildrenSubMenuNavbar: React.FC<MobileChildrenSubMenuProps> = ({
  menuItem,
  isOpen,
  onBack,
  onClose,
}) => {
  return (
    <Overlay isVisible={isOpen} className="lg:hidden" onClose={onClose}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div
            className="w-full flex flex-row space-x-2 p-6 border-gray-200 border-b-2 cursor-pointer"
            onClick={onBack}
          >
            <span className="items-center justify-center flex flex-col">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </span>

            <p className="text-xl font-semibold">{menuItem.label}</p>
          </div>
          <nav className="space-y-4 text-gray-800 text-lg p-6 ">
            <ul className="flex flex-col space-y-4">
              {menuItem.children.map((subMenuChild, key) => (
                <li
                  key={key}
                  className="cursor-pointer hover:text-main_brown transition-all duration-300"
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{subMenuChild}</span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Overlay>
  );
};

const SubMenuNavbar: React.FC<MobileSubMenuProps> = ({
  menu,
  isOpen,
  onBack,
  onClose,
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState<MenuItem>({
    label: "",
    children: [],
  });

  const setUpSubMenu = (subMenu: MenuItem) => {
    setSubMenu(subMenu);
    setSubMenuOpen(true);
  };

  const setAllMenuClose = () => {
    onClose();
    setSubMenuOpen(false);
  };

  return (
    <>
      <Overlay isVisible={isOpen} className="lg:hidden" onClose={onClose}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              className="w-full flex flex-row space-x-2 p-6 border-gray-200 border-b-2 cursor-pointer"
              onClick={onBack}
            >
              <span className="items-center justify-center flex flex-col">
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </span>

              <p className="text-xl font-semibold">{menu.label}</p>
            </div>
            <nav className="space-y-4 text-gray-800 text-lg p-6 ">
              <ul className="flex flex-col space-y-4">
                {menu.children.map((subMenu, key) => (
                  <li
                    key={key}
                    className="cursor-pointer hover:text-main_brown transition-all duration-300"
                    onClick={() => setUpSubMenu(subMenu)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{subMenu.label}</span>
                      <span className="ml-2">
                        <FontAwesomeIcon icon={faChevronRight} size="sm" />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Overlay>
      <ChildrenSubMenuNavbar
        isOpen={subMenuOpen}
        onBack={() => setSubMenuOpen(false)}
        onClose={setAllMenuClose}
        menuItem={subMenu}
      />
    </>
  );
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenu, setSubMenu] = useState<Menu>({
    label: "",
    children: [],
  });

  const handleLogoClick = () => {
    router.push("/");
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  const setUpSubMenu = (subMenu: Menu) => {
    setSubMenu(subMenu);
    setSubMenuOpen(true);
  };

  const setAllMenuClose = () => {
    onClose();
    setSubMenuOpen(false);
  };

  return (
    <>
      <Overlay isVisible={isOpen} className="lg:hidden" onClose={onClose}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="w-full flex flex-row items-center justify-center p-6 border-gray-200 border-b-2">
              <Image
                src={logo}
                alt="Katie Jayne"
                className="w-36 cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>
            <nav className="space-y-4 text-gray-800 text-lg p-6 border-gray-200 border-b-2">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((menu, key) => (
                  <li
                    key={key}
                    className="cursor-pointer hover:text-main_brown transition-all duration-300"
                    onClick={() => setUpSubMenu(menu)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className={menu.style}>{menu.label}</span>
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
                  <span className="font-semibold underline hover:text-main_brown cursor-pointer transition-all duration-300">
                    Learn More
                  </span>
                </h4>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <PrimaryButton
                    type="submit"
                    className="w-auto text-md flex-auto"
                    buttonType={ButtonType.Secondary}
                  >
                    Join Us
                  </PrimaryButton>
                  <PrimaryButton
                    type="submit"
                    className="w-auto text-md flex-auto"
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
      <SubMenuNavbar
        isOpen={subMenuOpen}
        onBack={() => setSubMenuOpen(false)}
        onClose={setAllMenuClose}
        menu={subMenu}
      />
    </>
  );
};

export default MobileNavbar;
