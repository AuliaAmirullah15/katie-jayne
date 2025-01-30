import { Product } from "@/app/types/product";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import Image from "next/image";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const FavoritesContent: React.FC<{ favorites: Product[] }> = ({
  favorites,
}) => {
  const router = useRouter();

  return (
    <div className="grid gap-8 grid-cols-4">
      {favorites.map((favorite, index) => (
        <div key={index} className="flex flex-col space-y-4">
          {/* Image Container */}
          <div className="relative w-full h-72">
            <Image
              src={favorite.image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Text Content */}
          <h4 className="text-lg truncate">{favorite.name}</h4>
          <p className="text-gray-600">
            {formatCurrency(favorite.price, favorite.currency)}
          </p>
          <div className="flex flex-row space-x-2">
            <PrimaryButton
              type="submit"
              className="w-full md:w-auto md:mt-0 mx-0 text-md flex-auto"
              buttonType={ButtonType.Secondary}
              onClick={() => router.push(`/product/${favorite.code}`)}
            >
              <FontAwesomeIcon icon={faPlus} className="w-4 h-4 mr-1" /> Add
            </PrimaryButton>
            <PrimaryButton
              type="submit"
              className="w-full md:w-auto md:mt-0 mx-0 text-md flex-auto"
              buttonType={ButtonType.Outlined}
              //   onClick={removeFromFavorites}
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4 mr-1" /> Remove
            </PrimaryButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesContent;
