import React, { Component } from 'react';
import db from '../firebase';
import {Link} from 'react-router-dom';

class Posts extends Component {
    state = {posts:[]};

    componentDidMount(){
        db.collection("posts")
        .get()
        .then((getData) =>{
            getData.forEach((post)=>{
                let data = post.data();
                let id = post;
                let payload = {
                    id,
                    ...data,
                };
                this.setState({posts: [...this.state.posts,payload] });
            });
        });
    }
    render() {
        return (
            <div className="container">
                {this.state.posts.map((post) =>(
                    <div className="jumbotron" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={'/detailed/${post.id}'}>Read more ....</Link>
                    </div>
                ))}

            </div>
        );
    }
}

export default Posts;