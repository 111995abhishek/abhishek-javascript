import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cartoon from './cartoon.jpg';

class UserDemo extends Component {
    constructor() {
        super();
        this.state = {
            users: [],searchUser:""
        }
    }

    handleInput=(event)=>{
        console.log(event.target.value);
        this.setState({searchUser:event.target.value})
    }

    // filtereduser=()=>{
    //     if(this.state.searchUser==''){
    //         return this.state.users;
    //     }else if(this.state.users.toLowerCase.includes(this.state.searchUser.toLowerCase))
    //         return this.state.searchUser;
    // }

    



    
    render() {
        
        return (
            <div>
                <div>
                    <form className="d-flex" style={{width:"300px",margin:"10px"}}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleInput}/>
                        <button className="btn btn-outline-success"  type="submit">Search</button>
                    </form>
                </div>

                {this.state.users.filter((user)=>{
                    if (this.state.searchUser==""){
                        return user
                    }else if(user.name.toLowerCase().includes(this.state.searchUser.toLowerCase())){
                        return user
                    }
                }).map((user) =>
                    <div className="card-group" key={user.name}   style={{width:"200px",border:"5px solid black",padding:"20px",margin:"20px"}}>
                        <div className="card"  style={{background:"pink"}} >
                            <img src={cartoon} className="card-img-top" alt="cartoon" style={{width:"100px"}} />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.username}</p>
                                <p className="card-text">{user.phone}</p>
                            </div>

                        </div>
                    </div>)}
            </div>
        );
    }
    componentDidMount() {
        fetch(' https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(items => this.setState({ 'users': items }));
    }
}

export default UserDemo;