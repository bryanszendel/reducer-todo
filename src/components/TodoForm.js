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

  const submitItem = e => {
    e.preventDefault()
    dispatch({ type: "ADD_ITEM", payload: newItem });
  }
  
  return (
    <form onSubmit={submitItem}>
      <input 
        type="text" 
        value={newItem}
        name="newItem"
        onChange={handleChanges}
        placeholder="Enter Task"
      />
      <button>
        Add Task
      </button>
      {console.log(newItem, state)}
    </form>
  )
}

export default TodoForm;