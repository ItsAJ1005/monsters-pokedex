import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/cardListComponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => ({ searchField }));  
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        }, () => console.log(this.state)); 
      });
  }

  render() {
    const { monsters, searchField } = this.state;  
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);  
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Enter monster name'
          onChange={onSearchChange}
        />

        <CardList monsters={filteredMonsters}/>


        {/* {filteredMonsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })} */}
      </div>
    );
  }
}

export default App;
