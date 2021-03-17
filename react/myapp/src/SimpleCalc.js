import React,{Component} from 'react';

class SimpleCalc extends Component{
    constructor(){
        super();
        this.state={fn:'',sn:''};
    }

    doCalc = (event) =>{
        let name = event.target.value;
        let value = event.target.value ;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div>
                <form>
                    <p>enter first number:<input type="text" name="fn" onChange={this.doCalc}></input></p>
                    <p>enter second number:<input type="text" name="sn" onChange={this.doCalc}></input></p>
                </form>
                <p>{this.state.fn}</p>
                <p>{this.state.sn}</p>

            </div>
        )
    }
}
export default SimpleCalc;