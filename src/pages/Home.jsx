import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Header from "../components/Header/Header";
import CardPizza from "../components/CardPizza/Cardpizza";
//import pizzas from "../Pizzas/pizzas"; 

function Home () {

  const [pizzas, setPizzas] = useState ([])

  const getPizzas = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas")
    const pizzas = await respuesta.json ()

    setPizzas(pizzas)
  }

  useEffect (() => {
    getPizzas()
  }, [])

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
