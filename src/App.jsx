import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DestinationDetails from "./components/DestinationDetails";
import Favorites from "./components/Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (destination) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === destination.id)
        ? prev.filter((fav) => fav.id !== destination.id)
        : [...prev, destination]
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home toggleFavorite={toggleFavorite} />} />
        <Route path="/destination/:id" element={<DestinationDetails toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
    </>
  );
}

export default App;
