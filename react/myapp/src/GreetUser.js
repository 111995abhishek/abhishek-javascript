import React, { Component } from 'react';

class GreetUser extends Component {

    constructor(){
        super();
        this.state={userName:''};
    }

    doGreetings=(event)=>{
        //console.log("do greetings called" + event.target.value);
        this.setState({userName:event.target.value});
    }

    submitHandler=(event)=>{
        alert('data received' + this.state.userName);
    }



    render() {
        let result='';
        if(this.state.userName != ''){
            result = <h1>greetings {this.state.userName}</h1>
        }else
            result='';
        return (
            <div>
               <form onSubmit={this.submitHandler}>
                   <h1>welcome to greetings app</h1>
                   <h1>Greetings</h1>
                   enter your name:<input type="text" onChange={this.doGreetings}/>
                   <button type="submit">click here</button>
                </form> 
                
            </div>
        );
    }
}

export default GreetUser;