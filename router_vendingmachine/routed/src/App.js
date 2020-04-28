import React from 'react';
import {Route, Switch} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import Chips from './Chips';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={()=><VendingMachine/>}/>
      <Route exact path="/soda" render={()=><Soda/>}/>
      <Route exact path="/sardines" render={()=><Sardines/>}/>
      <Route exact path="/chips" render={()=><Chips/>}/>
      </Switch>
    </div>
  );
}

export default App;
