import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

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
    const {monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
    <div className="App">
     <SearchBox 
        placeholder='Search Monsters '
        handleChange= {e =>
        this.setState({searchField: e.target.value}
       )}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}
export default App;
