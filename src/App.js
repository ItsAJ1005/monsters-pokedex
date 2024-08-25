import { useEffect, useState } from 'react';
import './App.css';
// import { Component } from 'react';
import CardList from './components/card-list/cardListComponent';
import SearchBox from './components/search-box/searchBoxComponent';


const App = () => {
    const [ searchField, setSearchField ] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => setMonsters(users));
    }, [])  

    useEffect(()=> {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);  
      });

      setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);  
    };

    
    return (
      <div className="App">
        <h1 className='app-title'>Monster Dex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='Enter monster name... 👾' className='monsters-search-text'/>

        <CardList monsters={filteredMonsters}/>

      </div>
    );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

  // onSearchChange = (event) => {
  //   const searchField = event.target.value.toLowerCase();
  //   this.setState(() => ({ searchField }));  
  // };

//   componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then((users) => {
    //     this.setState(() => {
    //       return { monsters: users };
    //     }, () => console.log(this.state)); 
    //   });
//   }

//   render() {
//     const { monsters, searchField } = this.state;  
//     const { onSearchChange } = this;

    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchField);  
    // });

    // return (
    //   <div className="App">
    //     <h1 className='app-title'>Monster Dex</h1>
    //     <SearchBox onChangeHandler={onSearchChange} placeholder='Enter monster name... 👾' className='monsters-search-text'/>

    //     <CardList monsters={filteredMonsters}/>

    //   </div>
    // );
//   }
// }

export default App;
