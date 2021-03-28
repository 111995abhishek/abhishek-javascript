import React, { Component } from 'react';
import { Router } from 'react-router';
import {Link} from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" style={{ color: "red" }}>
                Blog post:
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedConntent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                <ul classname="navbar-nav ml-auto">
                    <li classname="nav-item active">
                        <Link classname='nav-link' to="/">
                            Home<span classname="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li classname="nav-item">
                        <Link classname='nav-link' to="/CreatePost">
                            create post
                        </Link>
                    </li>
                    <li classname="nav-item">
                        <Link classname='nav-link' to="/SignUp">
                            Sign up
                        </Link>
                    </li>
                    <li classname="nav-item">
                        <Link classname='nav-link' to="/SignIn">
                            Sign in
                        </Link>
                    </li>

                </ul>
            </div>


        </nav>

    )
}

export default Navbar;