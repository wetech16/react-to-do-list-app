import React from 'react'
import '../assets/css/todoitem.css'

export default () => {
    return(
        <div className="todoWrapper">
            <button className="removeTodo" onClick={""}>remove</button>
            <div>Text</div>
        </div>
    );
}