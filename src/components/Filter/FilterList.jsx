import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';
// import PropTypes from 'prop-types';

function FilterList() {
  const { filteredData, setFilteredData,
    setFilters, filters } = useContext(PlanetContext);
  const [ planets, setPlanets ] = useState([]);
  const [ comparisonFilters, setComparisonFilters ] = useState({});
  const [ columns, setColumns ] = useState(
    ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']
  );
  const [ disableButton, setDisableButton ] = useState(false);

  useEffect(() => {
    setComparisonFilters({
      column: 'population',
      comparison: 'maior que',
      value: '0',
    });
  }, [])

  const handleChange = ({ target }) => {
    setComparisonFilters({
      ...comparisonFilters,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
/*     const index = columns.indexOf(comparisonFilters.column);
    // setDisableButton(true);
    setColumns(columns.slice(0, index).concat(columns.slice(index + 1)));
    setComparisonFilters({
      ...comparisonFilters,
      column: columns[0],
    }); */
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        comparisonFilters
      ],
    });
  };
  
  const cancelFilter = () => {
    // do nothing
  };
  
  return (
    <>
      Filter:
      <select
        id="column-filter"
        name="column"
        data-testid="column-filter"
        disabled={ disableButton }
        onChange={ handleChange }
      >
        {
          columns.map((column, index) => (
            <option
              key={index}
            >
              {column}
            </option>
          ))
        }
      </select>
      <select
        id="comparison-filter"
        name="comparison"
        data-testid="comparison-filter"
        disabled={ disableButton }
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="text"
        id="value-filter"
        name="value"
        data-testid="value-filter"
        disabled={ disableButton }
        onChange={ handleChange }
      />
      <button
        type="button"
        id="button-filter"
        onClick={ handleClick }
        disabled={ disableButton }
        data-testid="button-filter"
        >
        Filter
      </button>
      <button
        type="button"
        id="filter"
        onClick={ cancelFilter }
        disabled={ !disableButton }
        data-testid="filter"
      >
        X
      </button>
    </>
  );
}

/* FilterList.propTypes = {
  handleClick: PropTypes.func.isRequired,
}; */

export default FilterList;
