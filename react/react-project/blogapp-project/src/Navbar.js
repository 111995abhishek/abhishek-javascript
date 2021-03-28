import React, { Component } from 'react';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <link className="navbar-brand" to="/" style={{ color: red }}>
                Blog post:
            </link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedConntent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                <ul classname="navbar-nav ml-auto">
                    <li classname="nav-item active">
                        <link classname='nav-link' to="/">
                            Home<span classname="sr-only">(current)</span>
                        </link>
                    </li>
                    <li classname="nav-item">
                        <link classname='nav-link' to="/CreatePost">
                            create post
                        </link>
                    </li>
                    <li classname="nav-item">
                        <link classname='nav-link' to="/CreatePost">
                            Sign up
                        </link>
                    </li>
                    <li classname="nav-item">
                        <link classname='nav-link' to="/CreatePost">
                            Sign in
                        </link>
                    </li>

                </ul>
            </div>


        </nav>

    )
}

export default Navbar;