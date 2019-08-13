import React, {useReducer, useState} from 'react';

import {todoReducer, initialState} from '../reducers/todoReducer'

const TodoForm = () => {
  
  const [newItem, setNewItem] = useState()
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const handleChanges = e => {
    setNewItem(e.target.value);
  };
  
  return (
    <div>
      <input 
        type="text" 
        name="newItem"
        value={newItem}
        onChange={handleChanges}
        placeholder="Enter Task"
      />
      <button 
        type="submit"
        onClick={() => {
          dispatch({ type: "ADD_ITEM", payload: newItem });
        }}
        >
          Add Task
      </button>
    </div>
  )
}

export default TodoForm;