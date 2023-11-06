import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-header">
      <div className="container">
        <NavLink to="/" className="navbar-brand custom-brand">
          Crud
        </NavLink>

        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link custom-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link custom-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link custom-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link custom-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/StudentDetails" className="nav-link custom-link">
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ViewPage" className="nav-link custom-link">
                View
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
