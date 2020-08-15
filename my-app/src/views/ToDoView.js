import React, { useState } from 'react'
import ToDoItem from '../components/ToDoItem'
import ToDoInputBox from '../components/ToDoInputBox'

function ToDoView () {
    const toDoItems = [
        {id: 0, text: 'Make dinner tonight!'},
        {id: 1, text: 'Fold the laundry.'},
        {id: 2, text: 'Learn to make a React app!'},
      ]
    
    const [toDoText, setToDoText] = useState(toDoItems)

    return (
        <div>
            <ul>
                {
                toDoText.map((toDo) => 
                    <ToDoItem  key ={toDo.id} {...toDo}/>
                )
                }
            </ul>
                <ToDoInputBox />
        </div>
    );
}

export default ToDoView