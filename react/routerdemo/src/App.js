import logo from './logo.svg';
import './App.css';
import {Route, Router,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route component={Error}/>
      </Switch>
      
      {/* <About />
      <Contact /> */}
    </div>
  );
}

export default App;
