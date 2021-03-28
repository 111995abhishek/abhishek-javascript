import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {auth} from './firebase';

class SignIn extends Component {
    state={email:"",password:""}

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .catch(function(error){
            console.log(error.message);
        });
        this.setState({email:"",password:""});
    };
    render() {
        return (
            <form classname="container mt-4" onSubmit={this.handleSubmit}>
                {/* {err} */}
                <div classname="form-group">
                    <label>Email:</label>
                    <input
                    type="text"
                    value={this.state.emai}
                    onChange={this.handleChange}
                    name="email"
                    classname="form-control"
                    />
                </div>
                <div classname="form-group">
                    <label>password:</label>
                    <input
                    type="text"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    classname="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-4">
                    SignIn
                </button>
                &nbsp; Don't have an account? <Link to="/SignUp">SignUp</Link>
            </form>
        );
    }
}

export default SignIn;