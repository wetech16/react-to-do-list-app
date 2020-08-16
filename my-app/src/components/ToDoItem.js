import React from 'react'
import '../assets/css/todoitem.css'

export default ({id,text, removeTodo}) => {
 
    return(
        <div className="todoWrapper">
            <button className="removeTodo" onClick={ e => removeTodo(id)}>remove</button>
            <div>{text}</div>
        </div>
    );
}