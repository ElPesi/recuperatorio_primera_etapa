import './App.css';
import Ejericicio1 from './Ejericicio1';
import Ejercicio2 from './Ejercicio2';
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Ejericicio1 />
      <Ejercicio2 />
      <Counter initialValue={5} /> {}
    </div>
  );
}

export default App;
