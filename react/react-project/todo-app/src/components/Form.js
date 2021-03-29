import React,{useState} from 'react';

const Form = () => {
    const[title,setTitle]= useState('');

    const handleOnChange=(event)=>{
        this.setTitle(event.target.value);
        
    }
    return (
        <div>
            <input type="text" onChange={handleOnChange}/>
            <button>add todo</button>
        </div>
    );
};

export default Form;