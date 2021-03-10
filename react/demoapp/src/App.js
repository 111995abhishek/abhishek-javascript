import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponent';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:"abhishek"
    }
  }
  render(){
    return (
    <div className="App">
      <h1>welcome to my first react app</h1>
      <h2>app developed by {this.state.name}</h2>
      <button onClick ={()=>this.setState({name:"the team"})} >click here</button>
    </div>
  );
}
}

export default App;
