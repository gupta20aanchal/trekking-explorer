import React from "react";
import { Link } from "react-router-dom";
import "../styles/DestinationCard.css";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <h3 className="destination-title">{destination.name}</h3>
      <p><b>Location:</b> {destination.location}</p>
      <p><b>Difficulty:</b> {destination.difficulty}</p>
      <p><b>Best Season:</b> {destination.season}</p>
      <Link to={`/destination/${destination.id}`} className="details-btn">
       DETAILS
      </Link>
    </div>
  );
};

export default DestinationCard;
