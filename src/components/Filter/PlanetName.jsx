import React from 'react';
import PropTypes from 'prop-types';

function PlanetName({ handleChange }) {
  return (
    <label htmlFor="name-filter">
      Planet:
      <input
        id="name-filter"
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </label>
  );
}

PlanetName.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PlanetName;
