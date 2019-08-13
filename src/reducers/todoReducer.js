
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

    default:
      return state;
  }
}