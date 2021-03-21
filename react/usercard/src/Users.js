import React, { Component } from 'react';
import cartoon from './cartoon.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Users extends Component {

    constructor() {
        super();
        this.state = { users: [] };
    }
    render() {
        return (
            <div >
                <div>
                    <form class="d-flex" style={{width:"300px",margin:"10px"}}>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                {this.state.users.map((user) =>
                    <div className="card" key={user.id} style={{ width: "18rem", border: "10px solid black", margin: "10px", background: "pink" }}>
                        

                        <img src={cartoon} className="card-img-top" alt="mycartoon" width="200px" />
                        <div className="card-body" >
                            <div >
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text"><b>Email: </b>{user.email}</p>
                                <p className="card-text"><b>Username: </b>{user.username}</p>
                                <p className="card-text"><b>Address: </b>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</p>
                                {/* <p className="card-text">{user.address.street}</p>
                  <p className="card-text">{user.address.suite}</p>
                  <p className="card-text">{user.address.city}</p>
                  <p className="card-text">{user.address.zipcode}</p> */}
                                <p className="card-text">{user.company.catchPhrase}</p>

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

export default Users;