import { ADD_TO_LIST } from '../actions/'

const StarWarsReducer = (state = [{ id: 0 }], action) => {
  switch(action.type) {
    case ADD_TO_LIST: 
     for (let i = 0; i < state.length; i += 1) {
       if (state[i].id === action.payload.id) {
        state[i].count += 1 
        return [...state]
       } 
     }

      return [...state, { id: action.payload.id, count: 1 }] 

    default: 
      return state
  }
}

export default StarWarsReducer;