import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { order } from '../services';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [usedColumns, setUsedColumns] = useState([]);
  const [usedFilters, setUsedFilters] = useState([]);
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
    if (filters.order.sort === 'ASC') {
      planetList
        .sort((prev, next) => (
          order(prev[filters.order.column], next[filters.order.column])
        ));
    }
    if (filters.order.sort === 'DESC') {
      planetList
        .sort((prev, next) => (
          order(next[filters.order.column], prev[filters.order.column])
        ));
    }
    setFilteredData(planetList);
  }, [data, filters]);

  useEffect(() => {
    setUsedFilters(filters.filterByNumericValues);
  }, [filters.filterByNumericValues]);

  const contextValue = {
    data,
    setData,
    filteredData,
    setFilteredData,
    filters,
    setFilters,
    usedColumns,
    setUsedColumns,
    usedFilters,
    setUsedFilters,
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
