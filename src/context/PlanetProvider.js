import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [disableButtonList, setDisableButtonList] = useState([false]);
  const [usedColumns, setUsedColumns] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((binData) => binData.json())
      .then((jsonData) => setData(jsonData.results));
  }, []);

  useEffect(() => {
    const filteredPlanets = data
      .filter((planet) => (
        planet.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
      ));
    let planetList = filteredPlanets;
    filters.filterByNumericValues.forEach(({
      comparison, column, value,
    }) => {
      if (comparison === 'maior que') {
        planetList = planetList.filter((planet) => planet[column] > Number(value));
      }
      if (comparison === 'menor que') {
        planetList = planetList.filter((planet) => planet[column] < Number(value));
      }
      if (comparison === 'igual a') {
        planetList = planetList.filter((planet) => planet[column] === (value));
      }
      return planetList;
    });
    setFilteredData(planetList);
  }, [data, filters]);

  const contextValue = {
    data,
    setData,
    filteredData,
    setFilteredData,
    filters,
    setFilters,
    usedColumns,
    setUsedColumns,
    disableButtonList,
    setDisableButtonList,
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
