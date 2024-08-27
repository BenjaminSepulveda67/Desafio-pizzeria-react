import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
//import Login from "./components/Login/Login";
//import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
//import Cart from "./components/CartPizzas/Cartpizzas";
import Footer from "./components/Footer/Footer";
import Pizza from "./components/Pizza/Pizza";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "cart":
        return <Cart />;
      default:
        return <Home />;
      case "pizza":
        return <Pizza />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
