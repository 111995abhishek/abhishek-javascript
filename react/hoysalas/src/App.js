import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {products:[{name:"Tulsi arka",price:600},
                            {name:"Doopam",price:200},
                            {name:"Basma",price:100},
                            {name:"Haladi",price:300},
                            {name:"Kumkum",price:100},
                            {name:"Karpooram",price:5000},
                            {name:"Cow Dung Cake",price:500},
                            ]};
  };
  render(){
    return (
      <div className="App">
        {this.state.products.map(product=>(
          <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
