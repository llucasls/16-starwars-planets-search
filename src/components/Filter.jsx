import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { setFilterText } = useContext(PlanetContext);
  const handleChange = ({ target }) => {
    setFilterText(target.value);
  };
  return (
    <input
      id="name-filter"
      type="text"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}

export default Filter;
