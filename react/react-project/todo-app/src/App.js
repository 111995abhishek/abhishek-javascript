import './App.css';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import Todo from './todo';


function App() {

  const [todo, setTodo] = useState([]);
  const [title,setTitle] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  
  
  

  useEffect(() => {
    db.collection("todo").onSnapshot(snapshot => {
      setTodo(snapshot.docs.map(doc => ({id:doc.id,todos:doc.data().todos})))
    })
  }, []);


  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todo').add({
      title: title,
      date: date,
      time: time,
    })
    setTitle('');
    setDate('');
    setTime('');
  }




  return (
    <div className="App">

      <h1>TODO LIST</h1>
      
      <form >
        <input type="text"
          placeholder="enter a title..."
          onChange={event => setTitle(event.target.value)}
          value={title} />

        <input type="text"
          placeholder="enter the date..."
          onChange={event => setDate(event.target.value)}
          value={date} />

        <input type="text"
          placeholder="enter the time..."
          onChange={event => setTime(event.target.value)}
          value={time} />
          

        <button type="submit" onClick={addTodo}>Add Todo</button>

      </form>


      {
        todo.map((todos) => (
          <Todo  title={todos.title} date={todos.date} time={todos.time}   />
        ))
      }
      

      
    </div>
  );
}

export default App;
