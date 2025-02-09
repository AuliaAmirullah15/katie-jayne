import { Product } from "@/app/types/product";
import { AnimatePresence } from "framer-motion";
import FavoriteItem from "./favoriteItem";

const FavoritesContent: React.FC<{ favorites: Product[] }> = ({
  favorites,
}) => {
  return (
    <AnimatePresence>
      <div className="grid gap-6 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {favorites.map((favorite) => (
          <FavoriteItem key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default FavoritesContent;
