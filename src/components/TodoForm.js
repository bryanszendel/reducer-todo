import React, {useReducer, useState} from 'react';

import {todoReducer, initialState} from '../reducers/todoReducer'

const TodoForm = () => {
  
  const [newItem, setNewItem] = useState()
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const handleChanges = e => {
    setNewItem(
       e.target.value
    );
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={newItem}
        name="newItem"
        onChange={handleChanges}
        placeholder="Enter Task"
      />
      <button 
        onClick={() => {
          dispatch({ type: "ADD_ITEM", payload: newItem });
        }}
        >
          Add Task
      </button>
      {console.log(newItem, state)}
    </div>
  )
}

export default TodoForm;