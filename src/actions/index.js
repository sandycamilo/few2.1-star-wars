export const ADD_TO_LIST = 'ADD_TO_LIST'

export const addToList = (number) => {
  return {
    type: ADD_TO_LIST,
    payload: { number }
  }
}