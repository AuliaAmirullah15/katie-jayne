const FavoritesContent: React.FC<{ favorites: string[] }> = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite, index) => (
        <p key={index}>Favorite: {favorite}</p>
      ))}
    </div>
  );
};

export default FavoritesContent;
