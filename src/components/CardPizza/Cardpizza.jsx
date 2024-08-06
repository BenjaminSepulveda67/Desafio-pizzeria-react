import React from "react";
import "./Cardpizza.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">
          <strong>Precio: ${price.toLocaleString()}</strong>
        </p>
        <div className="buttons">
          <a href="#" className="btn btn-primary">
            Ver Más 👀
          </a>
          <a href="#" className="btn btn-success ">
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
