import React from "react";
import "./Card.css";
import defaultImage from "../images/logo.png";

const Card = props => {
  const imgsrc = props.image ? "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + props.image : defaultImage;
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgsrc} alt={props.title}></img>
      </div>
      <div className="card-info-container">
        <div className="card-info">
          <h1>{props.title}</h1>
          <h2>{props.release}</h2>
          <p>{props.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
