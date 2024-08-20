import React, { useState } from "react";
import pizzas from "../Pizzas/pizzas";
import "./Cartpizzas.css";

const Cart = () => {
  const initialCart = pizzas.map((pizza) => ({ ...pizza, quantity: 1 })); // Inicializa con cantidad 1
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      .filter((pizza) => pizza.quantity > 0);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="cart">
      <h2 className="cart-header">Tu carrito</h2>
      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} />
          <div className="cart-item-details">
            <h3 className="cart-item-name">{pizza.name}</h3>
            <p className="cart-item-price">Price: ${pizza.price}</p>
            <p>Quantity: {pizza.quantity}</p>
          </div>
          <div className="cart-item-controls">
            <button onClick={() => increaseQuantity(pizza.id)}>+</button>
            <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
          </div>
        </div>
      ))}
      <h2 className="cart-total">Total: ${totalPrice.toLocaleString()}</h2>
      <button
        className="cart-checkout-button"
        onClick={() => alert("Proceed to payment")}
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
