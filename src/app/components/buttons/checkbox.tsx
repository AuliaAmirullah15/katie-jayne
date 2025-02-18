const Checkbox = ({ isChecked, ...props }: { isChecked: boolean }) => {
  return (
    <div className="flex items-center" {...props}>
      <label
        htmlFor="checkbox"
        data-testid="checkbox-label"
        className={`relative w-6 h-6 cursor-pointer flex items-center justify-center border-2 border-gray-700 ${
          isChecked ? "bg-black" : "bg-white"
        }`}
      >
        <input
          type="checkbox"
          id="checkbox"
          className="sr-only"
          checked={isChecked}
          readOnly
          aria-checked={isChecked ? "true" : "false"}
        />
        {isChecked && (
          <svg
            data-testid="checkmark"
            className="w-5 h-5 absolute text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
