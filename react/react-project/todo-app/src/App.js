import './App.css';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import Todo from './Todo';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import firebase from 'firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  
  useEffect(() => {
    db.collection("todos").orderBy('timeStamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id:doc.id,todo:doc.data().todo})))
    })
    
  }, []);


  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }




  return (
    <div className="App">

      <h1>TODO LIST</h1>

      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input type="text"
          placeholder="enter a title..."
          onChange={event => setInput(event.target.value)}
        />

      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      {
        todos.map((todo) => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))
      }



    </div>
  );
}

export default App;
