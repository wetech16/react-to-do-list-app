import React from 'react';
import './App.css';
import ToDoView from './views/ToDoView'

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper" >
        <h1>To Do List App</h1>
        <ToDoView />
      </div>
    </div>
  );
}

export default App;
