import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import PropTypes from 'prop-types';

function Table() {
  const { data } = useContext(PlanetContext);
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
          <tr>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
    
          </tr>
          ))
          }
        </tbody>
      </table> 
    </main>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
