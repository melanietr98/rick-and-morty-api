import React from "react";
import "./Home.css";
import portalImage from "../assets/portal.png";



const Home = () => {
  return (
    <div className="home-container">
      <img className="home-image" src={portalImage} alt="Portal" />
      
    </div>
  );
};

export default Home;
