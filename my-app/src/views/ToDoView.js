import React, { useState } from 'react'
import ToDoItem from '../components/ToDoItem'
import ToDoInputBox from '../components/ToDoInputBox'

function ToDoView () {
    const toDoItems = {
        todos:[
        {id: 0, text: 'Make dinner tonight!'},
        {id: 1, text: 'Fold the laundry.'},
        {id: 2, text: 'Learn to make a React app!'},
        ],
        nextId:3
    }
    
    const [toDoItem, setToDoItem] = useState(toDoItems)

    const addTodo = (todoText) => {
        let todos = toDoItem.todos.slice();
        todos.push({id: toDoItem.nextId, text:todoText});
        setToDoItem({
            todos: todos,
            nextId: ++toDoItem.nextId
            });
    }
    const removeTodo = (id) => {
        setToDoItem({
            todos: toDoItem.todos.filter((todo, index) => todo.id !== id)
          });
      }
    return (
        <div>
            <ul>
                {
                toDoItem.todos.map((toDo) => 
                    <ToDoItem  key ={toDo.id} {...toDo} removeTodo={removeTodo}/>
                )
                }
            </ul>
                <ToDoInputBox addTodo={addTodo}/>
        </div>
    );
}

export default ToDoView