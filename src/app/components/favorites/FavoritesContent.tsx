import { Product } from "@/app/types/product";

const FavoritesContent: React.FC<{ favorites: Product[] }> = ({
  favorites,
}) => {
  return (
    <div>
      {favorites.map((favorite, index) => (
        <p key={index}>Favorite: {favorite.code}</p>
      ))}
    </div>
  );
};

export default FavoritesContent;
