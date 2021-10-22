import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function PlanetSort() {
  const { filters, setFilters } = useContext(PlanetContext);
  const columnList = [
    'name', 'rotation_period', 'orbital_period',
    'diameter', 'climate', 'gravity', 'terrain',
    'surface_water', 'population',
  ];

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        [target.name]: target.value,
      },
    });
  };

  return (
    <form onChange={ handleChange }>
      Order:
      <select
        name="column"
        data-testid="column-sort"
      >
        { columnList.map((column, index) => (
          <option key={ index }>{column}</option>
        )) }
      </select>
      <label htmlFor="sort-ascending">
        ASC
        <input
          name="sort"
          id="sort-ascending"
          type="radio"
          value="ASC"
        />
      </label>
      <label htmlFor="sort-descending">
        DESC
        <input
          name="sort"
          id="sort-descending"
          type="radio"
          value="DESC"
        />
      </label>
    </form>
  );
}

export default PlanetSort;
