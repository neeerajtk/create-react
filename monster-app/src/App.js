import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstien",
          id:"1"
        },
        {
          name: "Zombie",
          id: "2"
        },
        {
          name: "Demon",
          id: "3"
        },
      ]
    }
  }


  render(){
    return (
    <div className="App">
    {
    this.state.monsters.map(monster=>
    
      <h1 key={monster.id}>{monster.name}</h1>

    )}
    </div>
    )}
}
export default App;
