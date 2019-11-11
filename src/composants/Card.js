import React from "react";
import "./Card.css";

const Card = props => {
  const imgsrc = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + props.image;
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgsrc} alt="Poster"></img>
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
