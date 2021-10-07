import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

const SWContext = createContext({});

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((binData) => binData.json())
      .then((jsonData) => setData(jsonData.results));
  }, []);
  return (
    <SWContext.Provider value={ {} }>
      <Table data={ data } />
    </SWContext.Provider>
  );
}

export default App;
