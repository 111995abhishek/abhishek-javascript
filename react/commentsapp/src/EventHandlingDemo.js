import React, { Component } from 'react';

class EventHandlingDemo extends Component {

    changeCount(){
        this.setState({count:this.state.count+1});
    }
    constructor() {
        super();
        this.state={
            count:0
        }    
    }
    render() {
        return (
            <div>
              <button onClick={this.changeCount.bind(this)}>change count</button>
              <p>{this.state.count}</p>  
            </div>
        );
    }
}

export default EventHandlingDemo;