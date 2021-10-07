import React from 'react';
import PropTypes from 'prop-types';

function Table({ data }) {
  console.log(data);
  return (
    <main>
      {
        Math.random()
      }
    </main>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
