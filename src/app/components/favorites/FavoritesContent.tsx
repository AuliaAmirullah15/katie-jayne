// FavoritesContent.tsx
import { Product } from "@/app/types/product";
import { AnimatePresence } from "framer-motion";
import FavoriteItem from "./favoriteItem";

const FavoritesContent: React.FC<{ favorites: Product[] }> = ({
  favorites,
}) => {
  return (
    <AnimatePresence>
      <div className="grid gap-8 grid-cols-4">
        {favorites.map((favorite) => (
          <FavoriteItem key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default FavoritesContent;
