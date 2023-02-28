import React, { useState, useEffect } from "react";

function Location() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const data = await response.json();
      setLocations(data.results);
    }
    fetchLocations();
  }, []);

  return (
    <div>
      <h1>Locations</h1>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <h2>{location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Location;
