import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top py-0">
      <Link to="/">
        <h2>
          <i className="nav-item fa fa-hand-peace-o mr-2 py-0" />
        </h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-4 ml-auto py-0">
          <li className="nav-item">
            <Link to="/">
              <h5>Home</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <h5>About</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">
              <h5>Projects</h5>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
