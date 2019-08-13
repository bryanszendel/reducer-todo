import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoList = () => {
  
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <div>
      {console.log('TODOS', state.todos)}
      {state.todos.map(item => {
          return <p key={item.id}>{item.item}</p>
        })
      }
      {console.log('STATE', state)}
    </div>
  )
}

export default TodoList;