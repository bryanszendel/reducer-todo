import React, { useReducer } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { todoReducer, initialState } from './reducers/todoReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = item => {
    dispatch({ type: "ADD_TODO", payload: item})
  }

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id })
  }

  const clearComp = () => {
    dispatch({ type: "CLEAR_COMP" })
  }

  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={state.todos} toggleTodo={toggleTodo} clearComp={clearComp}/>
    </div>
  );
}

export default App;
