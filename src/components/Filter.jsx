import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import PlanetName from './Filter/PlanetName';
import FilterList from './Filter/FilterList';

function Filter() {
  const { setFilters, filters,
    disableButtonList } = useContext(PlanetContext);

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
      <FilterList disableButton={ disableButtonList[0] } />
    </>
  );
}

export default Filter;
