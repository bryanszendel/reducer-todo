import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>Reducer Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
