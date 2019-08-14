
export const initialState = {
    todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Be Better',
      completed: false,
      id: Date.now()
    }
  ]
}


export const todoReducer = (state, action) => {
  switch (action.type) {
    
    case "ADD_ITEM":
      const addItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return {
        ...state, 
        todos: [...state.todos, addItem]
      }
    
      case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
      }
    
      case "CLEAR_COMP":
        return {
          ...state,
          todos: state.todos.filter(item => !item.completed)
        }
    default:
      return state;
  }
}