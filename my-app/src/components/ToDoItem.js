import React from 'react'
import '../assets/css/todoitem.css'

export default ({text}) => {
    return(
        <div className="todoWrapper">
            <button className="removeTodo" onClick={""}>remove</button>
            <div>{text}</div>
        </div>
    );
}