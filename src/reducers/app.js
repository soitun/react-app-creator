import {ADD_TODO} from '../actions'

const initialState = {
  todos: [
    {text:'todo1', completed: false}, 
    {text:'todo2', completed: false}, 
    {text:'todo3', completed: false}
  ]
}

export function inboxApp(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}

