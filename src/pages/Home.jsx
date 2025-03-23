import React, { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import "../styles/App.css";

const destinations = [
  { id: 1, name: "Himalayas", location: "India", difficulty: "Hard", season: "Spring" },
  { id: 2, name: "Alps", location: "Switzerland", difficulty: "Medium", season: "Summer" },
  { id: 3, name: "Everest Base Camp", location: "Nepal", difficulty: "Hard", season: "Autumn" },
  { id: 4, name: "Machu Picchu", location: "Peru", difficulty: "Medium", season: "Winter" },
  { id: 5, name: "Appalachian Trail", location: "USA", difficulty: "Easy", season: "Fall" }
];

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="home-container">
      <h1>Explore Trekking Destinations</h1>
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="destinations-grid">
        {destinations
          .filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
          .map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
      </div>
    </div>
  );
};

export default Home;
