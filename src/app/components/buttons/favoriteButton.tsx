import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/stores";
import { addFavorite, removeFavorite } from "@/stores/favoritesSlice";
import PrimaryButton, { ButtonType } from "./primaryButton";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons"; // Filled heart
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons"; // Outlined heart

type FavoriteButtonProps = {
  productId: string;
};

const FavoriteButton = ({ productId }: FavoriteButtonProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const isFavorited = favorites.includes(productId);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  };

  return (
    <PrimaryButton
      type="button"
      className="flex-0"
      buttonType={ButtonType.Outlined}
      onClick={toggleFavorite}
    >
      <FontAwesomeIcon
        icon={isFavorited ? SolidHeart : RegularHeart}
        className={`text-2xl transition-all ${
          isFavorited ? "text-red-500" : "text-black"
        }`}
        title={isFavorited ? "Remove from favorites" : "Add to favorites"}
      />
    </PrimaryButton>
  );
};

export default FavoriteButton;
