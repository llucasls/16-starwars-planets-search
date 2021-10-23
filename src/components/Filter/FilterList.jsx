import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { removeUsedColumns } from '../../services';

function FilterList() {
  const {
    setFilters, filters, usedFilters,
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

  const cancelFilter = ({ target }) => {
    const index = target.name;
    const filterList = filters.filterByNumericValues
      .filter((usedFilter) => (
        usedFilter.column !== filters.filterByNumericValues[index].column
      ));
    setFilters({
      ...filters,
      filterByNumericValues: filterList,
    });
  };

  const handleSubmit = (event) => {
    const { target } = event;
    event.preventDefault();
    const columnList = columns.filter((column) => column !== comparisonFilters.column);
    setColumns(columnList);
    setComparisonFilters({
      ...comparisonFilters,
      column: columns[0],
    });
    console.log(target.comparison);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        comparisonFilters,
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
        onChange={ handleChange }
      />
      <button
        type="submit"
        id="button-filter"
        data-testid="button-filter"
      >
        Filter
      </button>
      {
        usedFilters.map((useF, index) => (
          <div key={ index }>
            <span>
              {`${useF.column} ${useF.comparison} ${useF.value}`}
            </span>
            <button
              type="button"
              id="filter"
              name={ index }
              onClick={ cancelFilter }
              data-testid="filter"
            >
              X
            </button>
          </div>
        ))
      }
    </form>
  );
}

export default FilterList;
