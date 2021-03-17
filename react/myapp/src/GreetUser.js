import React,{Component} from 'react';

class GreetUser extends Component{
    constructor(){
        super();
        this.state={userName:''};
    }

    doGreeting=(event)=>{
        this.setState({userName:event.target.value});
    }

    render(){

        let result;
        if(this.state.userName !='')
            result=<h1>greetings {this.state.userName}</h1>;
        else
            result='';    
        return(
            <div>
                <form>
                    <h1>Greetings</h1>
                    <p>Enter your name</p>
                    <input type='text' onChange={this.doGreeting}/>
                </form>
                {result}

            </div>
        )
    }
}

export default GreetUser;