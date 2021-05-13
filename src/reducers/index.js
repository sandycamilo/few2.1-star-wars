import { combineReducers } from 'redux'
import StarWarsReducer from './StarWarsReducer'

export default combineReducers({
  StarWars: StarWarsReducer
})