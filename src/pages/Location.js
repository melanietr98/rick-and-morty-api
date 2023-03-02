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
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  }

  const liStyle = {
    color: 'black',
    fontFamily: 'Calibre-Medium, sans-serif',
    width: '200px',
    height: '200px',
    margin: '10px', 
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    fontSize: '14px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: "Kavoon",
  }
  
  const h1Style = {
    textAlign: 'center',
    color: 'Chartreuse',
    fontFamily: 'Kavoon-Regular, sans-serif',
  }

  return (
    <div>
      <h1 style={h1Style}>Locations</h1>
      <div style={containerStyle}>
        {locations.map(location => (
          <div key={location.id} style={liStyle}>
            <h2>{location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Location;
