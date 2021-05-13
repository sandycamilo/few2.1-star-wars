import './StarWars.css';
import { useState } from 'react';
import DisplayStarWars from './DisplayStarWars.js';
// import { useDispatch } from 'react-redux'
// import { addToList } from '../actions';

function StarWars() {
  const [ number, setNumber] = useState('')
  const [data, setData ] = useState(null)
  const [item, savedData ] = useState([])
  // const dispatcher = useDispatch()

  async function loadData() {
    try {
      const path = `https://swapi.dev/api/people/${number}/`
      const res = await fetch(path) 
      const json = await res.json() 
      console.log(json)
      const res2 = await fetch(json.homeworld) 
      const json2 = await res2.json() 
      console.log(json2)

      const name = json.name
      const height = json.height
      const mass = json.mass
      const eye_color = json.eye_color
      const hair_color = json.hair_color

      const homeworld = json2.name
      console.log(homeworld)

      setData({ name, height, mass, eye_color, hair_color, homeworld })
     } catch(err) {
       console.log(err.message)
     }
  }

  return (
    <div className="StarWars">

      <form onSubmit={e => {
        e.preventDefault()
        loadData()
      }}>
        <input 
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder={'number'}
        />
        <button type="submit">Search</button>
        <button 
          type="button"
          // onClick={() => dispatcher(addToList(index))}
          onClick={() => savedData( item => [...item, data])}
        >Save</button>
      {data ? <DisplayStarWars { ...data } /> : null}
      <div className="savedCharacters">
        { item.map( (item, i) => {
          return (
            <div className="savedCharacter">
                <h1>Name:  {item.name}</h1>
                <h1>Height:  {item.height}</h1>
                <h1>Mass:  {item.mass}</h1>
                <h1>Hair Color:  {item.hair_color}</h1>
                <h1>Eye Color:  {item.eye_color}</h1>
                <h1>Homeworld:  {item.homeworld}</h1>
            </div>
          )
        })}
      </div>
      </form>
    </div>
  )
}

export default StarWars;

