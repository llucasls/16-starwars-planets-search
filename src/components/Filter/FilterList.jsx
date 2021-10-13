import React from 'react';
import PropTypes from 'prop-types';

function FilterList({ handleClick }) {
  return (
    <>
      Filter:
      <select id="column-filter" data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select id="comparison-filter" data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="text"
        id="value-filter"
        data-testid="value-filter"
      />
      <button
        type="button"
        id="button-filter"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filter
      </button>
    </>
  );
}

FilterList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default FilterList;
