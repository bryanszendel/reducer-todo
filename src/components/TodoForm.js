import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  
  const [newItem, setNewItem] = useState()

  const handleChanges = e => {
    setNewItem(
       e.target.value
    );
  };

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(newItem)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newItem}
        name="newItem"
        onChange={handleChanges}
        placeholder="Enter Task"
      />
      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TodoForm;