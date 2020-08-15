import React, { useState } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoInputBox from './components/ToDoInputBox';

function App() {
  const [toDoText, setToDoText] = useState('Create To Do List App')
  return (
    <div className="App">
      <div className="todo-wrapper" >
        <h1>To Do List App</h1>
        <ToDoItem toDoText={toDoText}/>
        <ToDoInputBox />
      </div>
    </div>
  );
}

export default App;
