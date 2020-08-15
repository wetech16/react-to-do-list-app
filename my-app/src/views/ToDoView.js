import React, { useState } from 'react'
import ToDoItem from '../components/ToDoItem'
import ToDoInputBox from '../components/ToDoInputBox'

export default () => {
    const [toDoText, setToDoText] = useState('Create To Do List App')
    return (
        <div>
            <ToDoItem toDoText={toDoText}/>
            <ToDoInputBox />
        </div>
    );
}