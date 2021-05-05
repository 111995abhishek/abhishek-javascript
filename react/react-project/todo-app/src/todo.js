import './todo.css';
import React,{useState} from 'react';
import { db } from './firebase';

function Todo({title,date,time}){
    const [complete,setComplete] = useState(false);

    
    return(
        <div className="task">
            <h3>{title}</h3>
            <h3>{date}</h3>
            <h3>{time}</h3>
            {/* <input className="todo-complete" key={id} type="checkbox"   onClick={markComplete}/> */}
            <button>completed</button>
            <button>delete</button>
        </div>
    )
}

export default Todo;