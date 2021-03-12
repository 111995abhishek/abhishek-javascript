import {Component} from 'react';

class ComponentX extends Component{
    constructor(){
        super();
        this.state={name:"vinay"};
    }

    render(){
        return(
            <div>
                <h1>welcome{this.state.name}</h1>
                <h1>welcome{this.state.name}</h1>
                <h1>welcome{this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"students"})}}>click here</button>
            </div>
        )
    }
}
export default ComponentX;