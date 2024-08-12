import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <p className="logo" onClick={() => setCurrentPage("home")}>
          Pizzería Mamma Mia!
        </p>
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
              <button
                className="nav-link"
                onClick={() => setCurrentPage("home")}
              >
                🍕 Home
              </button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => setCurrentPage("profile")}
                  >
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => setCurrentPage("logout")}
                  >
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => setCurrentPage("login")}
                  >
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => setCurrentPage("register")}
                  >
                    🔐 Register
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setCurrentPage("cart")}
              >
                🛒 Total: ${total.toLocaleString()}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
