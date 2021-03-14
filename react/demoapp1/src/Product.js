import React,{Component} from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state={productid:'',qty:0,isCart:true} 
    }

    addToCart = (pid) => (
        this.setState((state) =>(
            { productid:pid, qty:state.qty + 1 }
        )
    ))

    removeCart = () =>(
        this.setState({isCart:false})
    )


    render(){
        return(
            <div>
                <button onClick = {()=>this.addToCart(1)}>add to cart</button>
                <button onClick = {()=>this.addToCart(2)}>add to cart</button>
                <button onClick = {()=>this.addToCart(3)}>add to cart</button>
                {this.state.isCart && <Cart productid={this.state.productid} qty={this.state.qty}/>}
                {!this.state.isCart && <h2>cart removed</h2>}
                <button onClick={this.removeCart}>remove cart</button>
            </div>
        );
    }
}

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            qty:this.props.qty
        }
    }

    componentDidMount(){
        console.log('executes after component render');
    }

    /*UpdateQty = () =>(
        this.setState((state)=>(
            {qty:state.qty + 1}
        ))
    )*/

    static getDerivedStateFromProps(props,state){
        if(props.qty !== state.qty) {
            return {qty:props.qty}
        }
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.props.qty !== nextProps.qty){
            console.log("should component updated");
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.productid !== prevProps.productid){
            console.log('component updated');
        }
        
    }

    componentWillUnmount(){
        console.log("component destroyed");
    }

    render(){
        return(
            <div>
                <h2>cart items {this.state.qty}</h2>
                
            </div>
        );
    }
}

export default Product;