import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((binData) => binData.json())
      .then((jsonData) => setData(jsonData.results));
  }, []);

  useEffect(() => {
    const filteredPlanets = data
      .filter((planet) => (
        planet.name.includes(filters.filterByName.name)
      ));
    setFilteredData(filteredPlanets);
  }, [data, filters]);

  const contextValue = {
    data,
    setData,
    filteredData,
    setFilteredData,
    filters,
    setFilters,
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
