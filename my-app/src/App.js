import React from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoInputBox from './components/ToDoInputBox';

function App() {
  return (
    <div className="App">
      <div className="todo-wrapper" >
        <h1>To Do List App</h1>
        <ToDoItem />
        <ToDoInputBox />
      </div>
    </div>
  );
}

export default App;
