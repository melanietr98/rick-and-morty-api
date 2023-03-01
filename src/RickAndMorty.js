import React, { useEffect, useState } from "react";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}&gender=${genderFilter}&species=${speciesFilter}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [searchText, genderFilter, speciesFilter]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleSpeciesFilter = (event) => {
    setSpeciesFilter(event.target.value);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "200px",
    height: "300px",
    margin: "10px",
    padding: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input type="text" placeholder="Search by name" value={searchText} onChange={handleSearch} />
        <select value={genderFilter} onChange={handleGenderFilter}>
          <option value="">All genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <select value={speciesFilter} onChange={handleSpeciesFilter}>
          <option value="">All species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Mytholog">Mytholog</option>
          <option value="Robot">Robot</option>
          <option value="Animal">Animal</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div style={containerStyle}>
        {characters.map((character) => (
          <div key={character.id} style={cardStyle}>
            <img src={character.image} alt={character.name} style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RickAndMorty;
