import './todo.css';
import React, { useState } from 'react';
import { db } from './firebase';

function Todo(props) {
    const [complete, setComplete] = useState(false);


    return (
        <div className="task">
            <h3>{props.title}</h3>
            <h3>{props.date}</h3>
            <h3>{props.time}</h3>
            {/* <input className="todo-complete" key={id} type="checkbox"   onClick={markComplete}/> */}
            <button>completed</button>
            <button>delete</button>
        </div>
    )
}

export default Todo;