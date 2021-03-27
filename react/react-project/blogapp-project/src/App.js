import logo from './logo.svg';
import './App.css';
import Posts from './Posts/Posts';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Route} from "react-router-dom";
import DetailedPost from './Posts/DetailedPost';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Posts}></Route>
        <Route exact path='/detailed/:id' component={DetailedPost}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
