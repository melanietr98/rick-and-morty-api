import React from "react";
import "./Home.css";
import gifntext from "../assets/gifntext-gif.gif";

const Home = () => {
  return (
    <div className="home-container">
      <img className="home-image" src={gifntext} alt="GIF with Text" />
    </div>
  );
};

export default Home;
