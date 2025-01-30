import { motion } from "framer-motion";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { useRouter } from "next/navigation";

export default function EmptyFavorites() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center space-y-6 mt-4"
    >
      <p className="text-lg text-gray-700 text-center">
        You currently do not have any favorites. Start exploring our collection
        and add your favorite items to the cart!
      </p>

      <PrimaryButton
        type="button"
        buttonType={ButtonType.Secondary}
        className="px-6 py-2"
        onClick={() => router.push("/")}
      >
        Start Shopping
      </PrimaryButton>
    </motion.div>
  );
}
