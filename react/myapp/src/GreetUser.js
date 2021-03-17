import React,{Component} from 'react';

class GreetUser extends Component{

    render(){
        return(
            <div>
                <form>
                    <h1>Greetings</h1>
                    <p>Enter your name</p>
                    <input type='text'/>
                </form>
            </div>
        )
    }
}

export default GreetUser;