import React from 'react'
import '../assets/css/todoitem.css'

export default ({toDoText}) => {
    return(
        <div className="todoWrapper">
            <button className="removeTodo" onClick={""}>remove</button>
            <div>{toDoText}</div>
        </div>
    );
}