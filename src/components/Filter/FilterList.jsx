import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../../context/PlanetContext';
import { removeUsedColumns } from '../../services';

function FilterList(props) {
  const { disableButton } = props;
  const {
    setFilters, filters, disableButtonList, setDisableButtonList,
  } = useContext(PlanetContext);
  const [comparisonFilters, setComparisonFilters] = useState({});
  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    setComparisonFilters({
      column: 'population',
      comparison: 'maior que',
      value: '0',
    });
  }, []);

  const handleChange = ({ target }) => {
    setComparisonFilters({
      ...comparisonFilters,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    setColumns(columns);
    const index = columns.indexOf(comparisonFilters.column);
    setColumns(columns.slice(0, index).concat(columns.slice(index + 1)));
    setComparisonFilters({
      ...comparisonFilters,
      column: columns[0],
    });
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        comparisonFilters,
      ],
    });
    setDisableButtonList([true, ...disableButtonList]);
  };

  const cancelFilter = () => {
    // do nothing
  };

  const handleSubmit = (event) => {
    const { target } = event;
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: target.column.value,
          comparison: target.comparison.value,
          value: target.value.value,
        },
      ],
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      Filter:
      <select
        id="column-filter"
        name="column"
        data-testid="column-filter"
        disabled={ disableButton }
        onChange={ handleChange }
      >
        {
          removeUsedColumns(columns, filters).map((column, index) => (
            <option
              key={ index }
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
        type="submit"
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
    </form>
  );
}

FilterList.propTypes = {
  disableButton: PropTypes.bool.isRequired,
};

export default FilterList;
