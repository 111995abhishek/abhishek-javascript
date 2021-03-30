import React,{useState} from 'react';
import firebase from '../firebase';

function Form  () {
    const[title, setTitle] = useState('');

    const handleOnChange=(event)=>{
        setTitle(event.target.value);
        
    };

    const createTodo=()=>{
        const todoRef=firebase.database().ref('Todo');
        const todo={
            title,
            complete:false,
        };
        todoRef.push(todo);
    }
    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createTodo}>add todo</button>
        </div>
    );
};

export default Form;