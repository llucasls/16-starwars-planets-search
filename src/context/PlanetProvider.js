import React, { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((binData) => binData.json())
      .then((jsonData) => setData(jsonData.results));
  }, []);
  const contextValue = {
    data,
    setData,
  };
  return(
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>

  );
}

export default PlanetProvider;
