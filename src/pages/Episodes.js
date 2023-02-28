import React, { useState, useEffect } from "react";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <strong>{episode.name}</strong> - {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
