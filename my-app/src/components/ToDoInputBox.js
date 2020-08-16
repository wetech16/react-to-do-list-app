import React, {useState} from 'react'
import '../assets/css/todoinputbox.css'

export default ({addTodo}) => {
    const [toDoText, setToDoText] = useState('')
    const updateAddTodo = (todo) => {
        if (todo.length > 0) {
            addTodo(todo);
            setToDoText('')
        }
    }
    return (
        <div>
            <input type="text" value={toDoText} onChange={e => setToDoText(e.target.value) } />
                <button 
                    className="btn btn-primary" 
                    onClick={() => updateAddTodo(toDoText)}>
                    Submit
                </button>
        </div>
    )
}