import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Bipolar Factory
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/card">
                Camera
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chart">
                Camera Discription
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                Table
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h1>Welcome To the Security ManageMent</h1>
    </nav>
  );
}

export default NavBar;