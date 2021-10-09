import React, { useContext } from "react";
import PlanetContext from "../context/PlanetContext";

function Filter() {
  return (
    <input
      id="name-filter"
      type="text"
      data-testid="name-filter"
    />
  );
}

export default Filter;