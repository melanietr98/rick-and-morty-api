import React from "react";
import "./Home.css";
import portalImage from "../assets/portal.png";
import logo from "../assets/logo.png";


const Home = () => {
  return (
    <div className="home-container">
      <img className="home-logo" src={logo} alt="Logo" />
      <img className="home-image" src={portalImage} alt="Portal" />
    </div>
  );
};

export default Home;
