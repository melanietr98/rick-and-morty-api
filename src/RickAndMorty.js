import React, { useEffect, useState } from "react";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="grid-container">
      {characters.map((character) => (
        <div className="grid-item" key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}

export default RickAndMorty;
