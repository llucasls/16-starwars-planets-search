import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {
  const [ data, setData ] = useState({});
  const linkAPI = 'https://swapi-trybe.herokuapp.com/api/planets/'
  fetch(linkAPI)
    .then((value) => (value.json))
    .then((value) => (setData(value.results)));
  console.log(data);
  return (
    Table(data)
  );
}

export default App;
