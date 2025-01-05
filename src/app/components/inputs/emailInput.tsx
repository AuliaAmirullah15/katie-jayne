export default function EmailInput({ className }: { className?: string }) {
  return (
    <input
      type="email"
      name="email"
      placeholder="Enter your email address"
      className={`w-full h-12 px-4 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main_brown mb-2 ${className}`}
    />
  );
}
