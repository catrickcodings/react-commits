import { Component } from 'react' ;

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends Component {
  constructor(){
    
    super();

    this.state ={
      monsters: [],
      searchField:'',

      
    };
    
  } 
  //componentDidMount

     componentDidMount(){
      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };

          },
          () => {
            console.log(this.state);
          }
        )
        )
     }
     onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      
      this.setState(() =>  {
        return { searchField };
      });
     }
  render (){
    
    
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      });

    return (
    <div className="App">
     <SearchBox 
     className='monsters-search-box'
     onChangeHandler={onSearchChange} 
     placeholder='search monsters' />
     <CardList monsters={filteredMonsters}/>
  </div>
    );
  
  
  //map is used to iterate over array from left to right 
  
  }}
  export default App;
  
