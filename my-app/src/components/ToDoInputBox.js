import React from 'react'
import '../assets/css/todoinputbox.css'

export default ({toDoText, handleChange}) => {
    return (
        <div>
            <input type="text" value={""} onChange={e => handleChange(e.target.value) } />
                <button 
                    className="btn btn-primary" 
                    onClick={""}>
                    Submit
                </button>
        </div>
    )
}