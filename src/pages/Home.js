import React from "react";
import './Home.css';
import rickAndMortyGif from '../assets/rick-and-morty.gif';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Rick and Morty API</h1>
      <img className="home-gif" src={rickAndMortyGif} alt="Rick and Morty Gif" />
    </div>
  );
};

export default Home;
