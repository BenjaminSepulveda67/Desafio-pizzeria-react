import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import CardPizza from "../CardPizza/Cardpizza";
import pizzas from "../Pizzas/pizzas"; // Importa el array de pizzas

const Home = () => {
  return (
    <div>
      <Header />
      <div className="cards">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
