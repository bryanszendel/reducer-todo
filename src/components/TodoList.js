import React from 'react';

const TodoList = ({todos, toggleTodo, clearComp}) => {
  return (
    <div>
      {console.log('TODOS', todos)}
      {todos.map(item => {
          return (
            <div 
              key={item.id} 
              onClick={() => toggleTodo(item.id)}
              className={`item${item.completed ? ' completed' : ''}`}>
              <p>{item.item}</p>
              {console.log(item)}
            </div>
          )
        })
      }
      <button onClick={() => clearComp()}>Clear Completed</button>

    </div>
  )
}

export default TodoList;