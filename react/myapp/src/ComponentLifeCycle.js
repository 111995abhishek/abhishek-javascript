const {Component} = require("react");

class ComponentLifeCycle extends Component {
    constructor() {
        super();
        this.state = {name:"abhishek"}
        console.log('constructer called')
    }

    static getDerivedStateFromProps() {
        console.log('getDerievedStateFromprops called')
    }

    render(){
        console.log("render called")
        return <h1>welcome to component life cycle {this.state.name}</h1>;
    }

    componentDidMount(){
        console.log('componentDidMount called')
        setTimeout(this.setState({name:"salman khan"}),3000);
    }

    shouldComponentUpdate(){
      console.log("shouldComponentUpdate called");  
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
    }
}

export default ComponentLifeCycle;