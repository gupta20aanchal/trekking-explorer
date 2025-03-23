import React, { useState } from "react";
import "../styles/Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="favorites-container">
      <h2>My Favorite Treks</h2>
      {favorites.length === 0 ? <p>No favorites yet.</p> : (
        <ul>
          {favorites.map((fav, index) => (
            <li key={index}>{fav.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
