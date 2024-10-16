import { Component } from 'react' ;
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    console.log('constructor');
    super();

    this.state ={
      monsters: []

      
    };
  } //componentDidMount 
     componentDidMount(){
      console.log('component');
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
  render (){
    console.log('render');
    return (
    <div className="App">{
     this.state.monsters.map((monster) => {
      return <div key={monster.id}> <h1>{monster.name}</h1></div>
     })}
     
    </div>
  
  );
  }
  
  
  //map is used to iterate over array from left to right 
}

export default App;
