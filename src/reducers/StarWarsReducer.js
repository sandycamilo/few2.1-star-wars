import { ADD_TO_LIST } from '../actions/'

const starWarsReducer = (state = [{ number: 0 }], action) => {
  switch(action.type) {
    case ADD_TO_LIST: 
     for (let i = 0; i < state.length; i += 1) {
       if (state[i].number === action.payload.number) {
        state[i].count += 1 
        return [...state]
       } 
     }

      return [...state, { number: action.payload.number }] 

    default: 
      return state
  }
}

export default starWarsReducer;