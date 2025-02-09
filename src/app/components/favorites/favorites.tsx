import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import EmptyFavorites from "./emptyFavorites";
import FavoritesContent from "./FavoritesContent";

export default function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col">
      <h2 className="text-center text-2xl mb-4">My Favorites</h2>

      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoritesContent favorites={favorites} />
      )}
    </div>
  );
}
