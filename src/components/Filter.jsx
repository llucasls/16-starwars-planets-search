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
    const columnFilter = document.getElementById('column-filter').value;
    const comparisonFilter = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;
    setFilters({
      ...filters,
      filterByNumericValues: [
        // ...filters.filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    console.log(columnFilter);
    console.log(comparisonFilter);
    console.log(valueFilter);
    console.log(filters);
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
