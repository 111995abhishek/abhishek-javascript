import React,{useState} from 'react';
import firebase from '../firebase';

function Form  () {
    const[title, setTitle] = useState('');

    const handleOnChange=(event)=>{
        setTitle(event.target.value);
        console.log(event.target.value);
        
    };

    const createTodo=()=>{
        const todoRef=firebase.database().ref('Todo');
        const todo={
            title,
            complete:false,
        };
        todoRef.push(todo);
        alert("data created sucessfully");
    }
   
    
    return (
        <div>
            <input type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createTodo}>add todo</button>
        </div>
    );
};

export default Form;