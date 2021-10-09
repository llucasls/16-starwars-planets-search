import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
