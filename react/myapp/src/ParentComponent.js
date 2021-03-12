import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    render(){
        return(
            <h1>
                I am the parent component.
                <ChildComponent text={"i am the first child"}/>
                <ChildComponent text={"i am the second child"}/>
                <ChildComponent text={"i am the third child"}/>
            </h1>
        );
    }
}

export default ParentComponent;