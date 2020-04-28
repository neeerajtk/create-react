import React from 'react';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import Chips from './Chips';
import './App.css';

function App() {
  return (
    <div className="App">
      <VendingMachine/>
      <Chips/>
      <Sardines/>
      <Soda/>
    </div>
  );
}

export default App;
