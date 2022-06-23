import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, description, imageUrl, buttonName }) => {
  const navigate = useNavigate();

  const clickHandler = (event) => {
    navigate("/products", {state:{ id : event.target.id}})
  };

  return (
    <div className="card_container one_edge_shadow alternate">
      <div className="card_image">
        <img src={`${imageUrl}`} alt={name} />
      </div>
      <div className="card_content">
        <div className="card_heading">
          <h3>{name}</h3>
        </div>
        <div className="card_description">
          <p>{description}</p>
        </div>
        <div className="card_button">
          <button type="submit" id={id} onClick={clickHandler}>
            Explore {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
