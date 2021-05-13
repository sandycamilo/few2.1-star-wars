import './DisplayStarWars.css'
// import { useSelector } from 'react-redux'
// import StarWars from './StarWars';

function DisplayStarWars(props) {
  // const data = useSelector(state => state.data)
  
  return (
    <div className="DisplayStarWars">
      <div className="characterDetails">
        <h1>Name:  {props.name}</h1> 
        <h1>Height:  {props.height}</h1>
        <h1>Mass:  {props.mass}</h1>
        <h1>Hair Color:  {props.hair_color}</h1>
        <h1>Eye Color:  {props.eye_color}</h1> 
        <h1>Homeworld:  {props.homeworld}</h1>
      </div>


      {/* <div className="savedCharacters">
        { data.map( (item, index, arr) => <StarWars number={item.number} index={index}/>)}
      </div> */}
    </div>
  )
}

export default DisplayStarWars;
   
