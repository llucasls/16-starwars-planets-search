import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import PlanetName from './Filter/PlanetName';
import FilterList from './Filter/FilterList';
import PlanetSort from './Filter/PlanetSort';

function Filter() {
  const { setFilters, filters } = useContext(PlanetContext);

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  };

  return (
    <>
      <PlanetName handleChange={ handleChange } />
      <br />
      <FilterList />
      <PlanetSort />
    </>
  );
}

export default Filter;
