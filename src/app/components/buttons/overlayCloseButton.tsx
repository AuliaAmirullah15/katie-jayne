export default function OverlayCloseButton({ ...props }) {
  return (
    <div className="absolute top-4 right-6 text-2xl cursor-pointer" {...props}>
      &times;
    </div>
  );
}
