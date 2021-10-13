import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import PlanetName from './Filter/PlanetName';
import FilterList from './Filter/FilterList';

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
  const handleClick = () => {

  };
  return (
    <>
      <PlanetName handleChange={ handleChange } />
      <br />
      <FilterList handleClick={ handleClick } />
    </>
  );
}

export default Filter;
