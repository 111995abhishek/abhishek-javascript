import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {auth} from './firebase';

class SignUp extends Component {
    state={username:"",password:""};

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .catch(function (error){
            console.log(error.message);
        })
        this.setState({email:"",password:""});
    };
    render() {
        const err = this.state.err ? (
            <div classsname="alert alert-danger" role="alert">
                {this.state.err}
            </div>
        ):null;
        return(
            <form classname="container mt-4" onSubmit={this.handleSubmit}>
                {err}
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
                <button type="submit" classname="btn btn-primary mb-4">
                    sign up
                </button>
                &nbsp; Already have an account?<link to="/signin">sign in</link>

            </form>
        );
        
    }
}

export default SignUp;
