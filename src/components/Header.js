import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-Commerce Demo
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
            <span className="navbar">
              <FaBars color="white" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
