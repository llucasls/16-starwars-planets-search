import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((binData) => binData.json())
      .then((jsonData) => setData(jsonData.results));
  }, []);
  useEffect(() => {
    const filteredData = data
      .filter((planet) => planet.name.includes(filterText));
    setFilteredNames(filteredData);
  }, [data, filterText]);
  const contextValue = {
    data,
    setData,
    filterText,
    setFilterText,
    filteredNames,
    setFilteredNames,
  };
  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PlanetProvider;
