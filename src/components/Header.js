import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="home-logo" src={logo} alt="Logo" />
        <nav>
          <ul className="header-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/Location">Location</Link>
            </li>
            <li>
              <Link to="/RickAndMorty" className="api-link">
                Characters
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
