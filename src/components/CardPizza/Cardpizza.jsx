import React from "react";
import "./Cardpizza.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={name} className="card-pizza-img" />
      <h3>{name}</h3>
      <p>Price: ${price.toLocaleString()}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardPizza;