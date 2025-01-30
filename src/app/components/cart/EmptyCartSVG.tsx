const EmptyCartSVG = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8a2 2 0 100 4 2 2 0 000-4zm10 2a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

export default EmptyCartSVG;
