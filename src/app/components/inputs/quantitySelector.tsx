import React from "react";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { Action } from "@/app/reducers/quantityReducer";

interface QuantitySelectorProps {
  quantity: number;
  dispatch?: React.Dispatch<Action>;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  dispatch,
  onIncrement,
  onDecrement,
  className,
}) => {
  const defaultIncrement = () => {
    if (onIncrement) onIncrement();
    else if (dispatch) dispatch({ type: "INCREMENT" });
  };

  const defaultDecrement = () => {
    if (onDecrement) onDecrement();
    else if (dispatch) dispatch({ type: "DECREMENT" });
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <PrimaryButton
        type="button"
        className="mt-2"
        buttonType={ButtonType.Outlined}
        onClick={defaultDecrement}
        disabled={quantity <= 1}
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
