import React from "react";
import { useParams } from "react-router-dom";
import "../styles/DestinationDetails.css";

// Importing images from src/assets/
import Himalaya from "../assets/Himalaya.jpg";
import Alps from "../assets/Alps.jpg";
import EverestBaseCamp from "../assets/EverestBaseCamp.jpg";
import MachuPicchu from "../assets/MachuPicchu.jpg";
import AppalachianTrail from "../assets/AppalachianTrail.jpg";

const destinations = [
  { id: 1, name: "Himalaya", location: "India/Nepal", difficulty: "Hard", season: "Spring", image: Himalaya },
  { id: 2, name: "Alps", location: "Europe", difficulty: "Medium", season: "Winter", image: Alps },
  { id: 3, name: "Everest Base Camp", location: "Nepal", difficulty: "Hard", season: "Autumn", image: EverestBaseCamp },
  { id: 4, name: "Machu Picchu", location: "Peru", difficulty: "Medium", season: "Summer", image: MachuPicchu },
  { id: 5, name: "Appalachian Trail", location: "USA", difficulty: "Medium", season: "Fall", image: AppalachianTrail },
];

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id.toString() === id);

  if (!destination) {
    return <h2 className="error-msg">Destination not found!</h2>;
  }

  return (
    <div className="destination-details">
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className="destination-img" />
      <p><b>Location:</b> {destination.location}</p>
      <p><b>Difficulty:</b> {destination.difficulty}</p>
      <p><b>Best Season:</b> {destination.season}</p>
    </div>
  );
};

export default DestinationDetails;
