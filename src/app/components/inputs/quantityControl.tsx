import React from "react";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
  onIncrement,
  onDecrement,
  className,
}) => {
  const defaultIncrement = () => {
    if (onIncrement) onIncrement();
    else setQuantity((prev) => prev + 1);
  };

  const defaultDecrement = () => {
    if (onDecrement) onDecrement();
    else setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <PrimaryButton
        type="button"
        className="mt-2"
        buttonType={ButtonType.Outlined}
        onClick={defaultDecrement}
      >
        -
      </PrimaryButton>

      <span className="pt-2 text-xl w-12 text-center font-semibold">
        {quantity}
      </span>

      <PrimaryButton
        type="button"
        className="mt-2"
        buttonType={ButtonType.Outlined}
        onClick={defaultIncrement}
      >
        +
      </PrimaryButton>
    </div>
  );
};

export default QuantitySelector;
