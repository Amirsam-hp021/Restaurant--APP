import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css"; // ✅ Import CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipOJsFmO-RuFVdJfSmLj_PAUDLmT4FeDwZ0db1Vu=w120-h86-n-k-no-nu"
            alt="Restaurant Logo"
          />
          <h1>Lime Lounge</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Order
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
