import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import PlanetName from './Filter/PlanetName';
import FilterList from './Filter/FilterList';

function Filter() {
  const { setFilterText } = useContext(PlanetContext);
  const handleChange = ({ target }) => {
    setFilterText(target.value);
  };
  return (
    <>
      <PlanetName handleChange={ handleChange } />
      <FilterList />
    </>
  );
}

export default Filter;
