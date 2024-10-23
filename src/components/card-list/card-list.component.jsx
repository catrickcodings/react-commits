import { Component } from 'react';

class CardList extends Component {

   render() {
    console.log(this.props.monsters);
    console.log('render from CardList');
    const  { monsters } = this.props;

    return (
       <div classname='card-list'>

          {
            monsters.map((monster) => {
              const { name , email , id } = monster;

            return (
            <div className='card-container' key={monster.id}> 
            <img 
             alt={`monster ${monster.name}`} 
             src={`https://robohash.org/{monster.id}?set=set2&size=180x180`}/>
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>




            </div>
          )})}
       

       </div>
        );        
    }
   
}

export default CardList;