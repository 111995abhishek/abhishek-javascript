import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {products:[{id:111,name:"Tulsi arka",price:600},
                            {id:222,name:"Doopam",price:200},
                            {id:333,name:"Basma",price:100},
                            {id:444,name:"Haladi",price:300},
                            {id:555,name:"Kumkum",price:100},
                            {id:666,name:"Karpooram",price:5000},
                            {id:777,name:"Cow Dung Cake",price:500},
                            ]};
  };
  render(){
    return (
      <div className="App">
        {this.state.products.map(product=>(
          <div key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
