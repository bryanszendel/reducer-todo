import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/todoReducer';

const TodoList = () => {
  
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  return (
    <div>
      {console.log('TODOS', state.todos)}
      {state.todos.map(item => {
          return (
            <div 
              key={item.id} 
              onClick={() => dispatch({ type: "TOGGLE_COMPLETED", payload: item.id })}
              className={`item${item.completed ? ' completed' : ''}`}>
              <p>{item.item}</p>
              {console.log(item)}
            </div>
          )
        })
      }
      <button onClick={() => dispatch({ type: "CLEAR_COMP" })}>Clear Completed</button>

      {console.log('STATE', state)}
    </div>
  )
}

export default TodoList;