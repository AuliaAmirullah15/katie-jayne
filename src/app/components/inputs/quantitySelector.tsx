import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantitySelectorProps {
  quantity: number;
  dispatch?: React.Dispatch<{ type: "INCREMENT" | "DECREMENT" }>;
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
    <div
      className={`flex items-center border border-gray-500 rounded-lg p-1 ${className}`}
    >
      <button
        onClick={defaultDecrement}
        disabled={quantity <= 1}
        className="p-2 disabled:opacity-50"
      >
        <FaMinus size={16} />
      </button>
      <span className="mx-4 text-lg font-semibold">{quantity}</span>
      <button onClick={defaultIncrement} className="p-2">
        <FaPlus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
