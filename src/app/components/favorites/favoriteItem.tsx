// MotionFavoriteItem.tsx
import { Product } from "@/app/types/product";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import Image from "next/image";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { removeFavorite } from "@/app/stores/favoritesSlice";
import { motion } from "framer-motion";

interface FavoriteItemProps {
  favorite: Product;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ favorite }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      layout
      key={favorite.id}
      className="flex flex-col space-y-4"
    >
      {/* Image Container */}
      <div className="relative w-full h-72">
        <Image
          src={favorite.image}
          alt={`Thumbnail ${favorite.id}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Content */}
      <h4 className="text-lg truncate">{favorite.name}</h4>
      <p className="text-gray-600">
        {formatCurrency(favorite.price, favorite.currency)}
      </p>
      <div className="flex flex-col space-y-2">
        <PrimaryButton
          type="submit"
          className="w-full md:w-auto md:mt-0 mx-0 text-md flex flex-row items-center justify-center"
          buttonType={ButtonType.Secondary}
          onClick={() => router.push(`/product/${favorite.code}`)}
        >
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4 mr-1" /> Add
        </PrimaryButton>
        <PrimaryButton
          type="submit"
          className="w-full md:w-auto md:mt-0 mx-0 text-md flex flex-row items-center justify-center"
          buttonType={ButtonType.Outlined}
          onClick={() => dispatch(removeFavorite(favorite))}
        >
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4 mr-1" /> Remove
        </PrimaryButton>
      </div>
    </motion.div>
  );
};

export default FavoriteItem;
