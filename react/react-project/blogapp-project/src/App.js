import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
import Posts from './Posts/Posts';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import DetailedPost from './Posts/DetailedPost';
// import { Component } from 'react';
import { auth } from './firebase';
import CreatePost from './Posts/CreatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Navbar from './Navbar';

class App extends Component {
  state = {
    user:false,
  };


  componentDidMount(){
    auth.onAuthStateChanged((users)=>{
      if(users){
        console.log("user signed in");
        console.log(users);
        this.setState({user: users});
      }else{
        console.log("no user logged in");
      }
    });
  }

  onSignOut = (id)=>{
    if(id==1){
      id=0;
      auth
      .signOut()
      .then(function(){
        this.setState({
          user: false,
        })
      })
      .catch(function (error){

      });
    }
  };

  render(){
    return (
      <div className="App" >
        <BrowserRouter>
          <Navbar user={this.state.user} onSignOut={this.onSignOut} />
          <Switch>
          <Route exact path='/' component={()=><Posts user={this.state.user}/>}/>
          <Route exact path="/CreatePost" component={CreatePost}></Route>
          <Route exact path='/detailed/:id' component={DetailedPost}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
          <Route exact path='/signin' component={SignIn}></Route>
          
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
