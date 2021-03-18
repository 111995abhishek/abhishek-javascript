import React, { Component } from 'react';

class SimpleCalc extends Component {
    constructor(){
        super();
        this.state={fn:"",sn:"",result1:"",result2:"",result3:""}
    }

    validateData=(event)=>{
        let  name = event.target.name;
        let value = event.target.value;
        
        if(!Number(value)){
            alert("not valid input")
        }
        else{
            this.setState({[name]:value});
        }
    }

    doCalc=(event)=>{
        let sum = 'the addition of ' + this.state.fn + 'and' + this.state.sn + 'is' + (Number(this.state.fn) + Number(this.state.sn));
        let sub = 'the substraction of ' + this.state.fn + 'and' + this.state.sn + 'is' + (Number(this.state.fn) - Number(this.state.sn));
        let mul = 'the multiplication of ' + this.state.fn + 'and' + this.state.sn + 'is' + (Number(this.state.fn) * Number(this.state.sn));
        let  res = sum + ' ' +sub+' '+mul;
        this.setState({result1:sum,result2:sub,result3:mul});
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.doCalc}>
                <p>Enter first number:<input type="text" name="fn" onChange={this.validateData}></input></p>
               <p>Enter second number:<input type="text" name ="sn" onChange={this.validateData}></input></p>
               <button type="submit">Run calculator</button>
                </form>
               <p>{this.state.result1} </p>
               <p>{this.state.result2} </p>
               <p>{this.state.result3} </p>
 
            </div>
        );
    }
}

export default SimpleCalc;