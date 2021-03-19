import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import faker from 'faker';

class Comment extends Component {
    render() {
        return (
            <div className="ui container comments">

                <div className="ui container comments">
                    <div className="comment">
                        <a href="/" className="avatar">
                            <img src="celeb1.jpg" alt="avatar" />
                        </a>
                        <div className="content">
                            <a href="/" className="author">
                                {this.props.name}
                            </a>
                            <div className="metadata">
                                <span className="date">Today at 6:00pm</span>
                            </div>
                            <div className="text">Nice Blog post!</div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Comment;