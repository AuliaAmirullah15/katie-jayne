import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import { addFavorite, removeFavorite } from "@/app/stores/favoritesSlice";
import PrimaryButton, { ButtonType } from "./primaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { Product } from "@/app/types/product";

type FavoriteButtonProps = {
  product: Product;
};

const FavoriteButton = ({ product }: FavoriteButtonProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const isFavorited = favorites.some((fav) => fav.code === product.code);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
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
        data-testid="heart-icon"
        className={`text-2xl transition-all ${
          isFavorited ? "text-red-500" : "text-black"
        }`}
        title={isFavorited ? "Remove from favorites" : "Add to favorites"}
        aria-label={isFavorited ? "solid-heart" : "regular-heart"}
      />
    </PrimaryButton>
  );
};

export default FavoriteButton;
