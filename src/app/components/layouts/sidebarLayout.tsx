import React, { useEffect } from "react";
import OverlayCloseButton from "../buttons/overlayCloseButton";

interface SidebarLayoutProps {
  isOverlayVisible: boolean;
  title: React.ReactNode;
  onClose: () => void;
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  isOverlayVisible,
  title,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (isOverlayVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOverlayVisible]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-700 ${
        isOverlayVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 h-full bg-white z-50 flex flex-col transition-transform duration-500 ease-in-out ${
          isOverlayVisible
            ? "transform translate-x-0"
            : "transform translate-x-full"
        } 
        w-full md:w-[400px] right-0`}
      >
        <OverlayCloseButton onClick={onClose} />
        {title}
        <hr className="w-full border-t border-gray-300"></hr>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
