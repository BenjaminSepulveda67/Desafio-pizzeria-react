import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link
import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link to="/" className="logo">
          {" "}
          {/* Usa Link en lugar de onClick */}
          Pizzería Mamma Mia!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                {/* Reemplaza setCurrentPage con Link */}
                🍕 Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    {" "}
                    {/* Link para Profile */}
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">
                    {" "}
                    {/* Link para Logout */}
                    🔒 Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    {" "}
                    {/* Link para Login */}
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    {" "}
                    {/* Link para Register */}
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                {" "}
                {/* Link para Cart */}
                🛒 Total: ${total.toLocaleString()}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
