import React from 'react';

function FilterList() {
  return (
    <>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="text"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
    </>
  );
}

export default FilterList;
