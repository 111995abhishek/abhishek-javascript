import React,{Component} from "react";
import ComponentJ from './ComponentJ';

class ComponentK extends Component{
    constructor(props) {
        super(props);
        this.state = {show:true}
    }

    delComponent=()=>{
        this.setState({show:false})
    }

    render(){
        
        let myComponent;
        if(this.state.show){
            myComponent=<ComponentJ/>;
        };

        return(
            <diiv>
                {myComponent}
                <button onClick={this.delComponent}>delete component</button>
            </diiv>
        );

    }
}

export default ComponentK;