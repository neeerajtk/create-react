import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list';


class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
      // .then returns the received json  object      
  };



  render() {
    return (
    <div className="App">
      <input type="search" placeholder="Search Monster " onChange={e=>console.log(e.target.value)
      }/>
      <CardList monsters={this.state.monsters}/>
    </div>
    )}
}
export default App;
