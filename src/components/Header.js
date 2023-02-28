import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Episodes">Episodes</Link></li>
          <li><Link to="/Location">Location</Link></li>
          <li><Link to="/RickAndMorty" className="api-link">Characters</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
