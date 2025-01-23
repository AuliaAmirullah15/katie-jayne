import React, { ReactNode } from "react";
import OverlayCloseButton from "../buttons/overlayCloseButton";

// Props Interface
interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Overlay: React.FC<OverlayProps> = ({
  isVisible,
  onClose,
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col transition-all duration-500 ease-in-out ${
        isVisible ? "transform translate-x-0" : "transform -translate-x-full"
      } ${className}`}
    >
      <OverlayCloseButton onClick={onClose} />
      {children}
    </div>
  );
};

export default Overlay;
