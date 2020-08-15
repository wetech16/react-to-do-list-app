import React from 'react'
import '../assets/css/todoinputbox.css'

export default () => {
    return (
        <div>
            <input type="text" value={""} onChange={""} />
                <button 
                    className="btn btn-primary" 
                    onClick={""}>
                    Submit
                </button>
        </div>
    )
}