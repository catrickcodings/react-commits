import {  useState } from 'react' ;

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

const App = () => {
  const [ searchField , setSearchField ] = useState('');
   const onSearchchange = (event) => {
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
          }
     
    


   
 return (
  <div className="App">
     <h1 classname='app-title'>Monsters rolodex </h1> 
     <SearchBox 
     className='monsters-search-box'
     onChangeHandler={onSearchChange} 
     placeholder='search monsters' />
     <CardList monsters={filteredMonsters}/> 
  </div>
 )

}

// class App extends Component {
//   constructor(){
    
//     super();

//     this.state ={
//       monsters: [],
//       searchField:'',
            
      
//     };
    
//   } 
//   //componentDidMount

//      componentDidMount(){
      
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };

//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//         )
//      }
//      onSearchChange = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();
      
//       this.setState(() =>  {
//         return { searchField };
//       });
//      };
//   render (){
    
    
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//       });

  
    
  
       
  
  
  
  //map is used to iterate over array from left to right 
  
  //}}
  export default App;
  
