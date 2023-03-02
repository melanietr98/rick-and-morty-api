import React, { useState, useEffect } from "react";
import './episodes.css';

//this is a component. i just didn't move it into the components folder //

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="episodes-container">
      <h1 className="episodes-title">Episodes</h1>
      <ul className="episodes-list">
        {episodes.map((episode) => (
          <li key={episode.id} className="episode-box">
            <strong>{episode.name}</strong> - {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
