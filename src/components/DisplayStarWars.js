import './DisplayStarWars.css'

function DisplayStarWars(props) {
  return (
    <div className="DisplayStarWars">
      <div className="characterDetails">
        <h1>Name:{props.name}</h1> 
        <h1>Height:{props.height}</h1>
        <h1>Mass:{props.mass}</h1>
        <h1>Hair Color:{props.hair_color}</h1>
        <h1>Eye Color:{props.eye_color}</h1> 
        <h1>Homeworld:{props.homeworld}</h1>
      </div>
    </div>
  )
}

export default DisplayStarWars;
   
