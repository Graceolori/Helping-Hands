import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        Helping Hands
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="d-flex flex-role"></div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link" to="/contribution">
            Contribution
          </NavLink>
          <NavLink className="nav-item nav-link" to="contactus">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
