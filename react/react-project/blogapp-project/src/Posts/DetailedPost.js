import React, { Component } from 'react';
import db from '../firebase';

class DetailedPost extends Component {
    state={posts:[]};
    componentDidMount(){
        db.collection("posts")
        .get()
        .then((getData)=>{
            getData.forEach((post)=>{
                let data = post.data();
                let {id}=post;
                let payload = {
                    id,
                    ...data,
                };
                if (this.props.match.params.id === payload.id){
                    this.setState({posts:payload});
                }
            });
        });
    }
    render() {
        const post = this.state.posts;
        return (
            <div className="container mt-4">
                <div className="jumbotron" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>        
                </div>
            </div>
        );
    }
}

export default DetailedPost;