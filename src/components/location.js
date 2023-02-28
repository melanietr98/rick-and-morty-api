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

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  }

  const liStyle = {
    color: 'black',
    fontFamily: 'Calibre-Medium, sans-serif',
    display: 'inline-block',
    width: '200px',
    margin: '0 10px 10px 0', 
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    fontSize: '14px',
    backgroundColor: 'white',
  }

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={{color: 'green'}}>Locations</h1>
        <ul style={{listStyle: 'none', padding: '0'}}>
          {locations.map(location => (
            <li key={location.id} style={liStyle}>
              <h2>{location.name}</h2>
              <p>Type: {location.type}</p>
              <p>Dimension: {location.dimension}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Location;
