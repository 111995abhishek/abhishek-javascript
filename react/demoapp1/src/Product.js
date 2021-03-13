import React,{Component} from 'react';

class Product extends Component{
    render(){
        return(
            <div>
                <Cart/>
            </div>
        );
    }
}

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty:0
        }
    }

    componentDidMount(){
        console.log('executes after component render');
    }

    UpdateQty = () =>(
        this.setState((state)=>(
            {qty:state.qty + 1}
        ))
    )

    componentDidUpdate(){
        console.log('component updated');
    }

    render(){
        return(
            <div>
                <h2>cart items {this.state.qty}</h2>
                <button onClick={this.UpdateQty}>add to cart</button>
            </div>
        );
    }
}

export default Product;