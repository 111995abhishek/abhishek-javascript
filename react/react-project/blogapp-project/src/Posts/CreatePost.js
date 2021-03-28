import React, { Component } from 'react';
import db from '../firebase';

class CreatePost extends Component {
    state={
        title:'',
        content:'',
    };


    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }


    handleSubmit=(event)=>{
        event.preventDefault();

        let postRef = db.collection("posts");
        postRef
        .add(this.state)
        .then(function(doc){
            console.log(doc.id);
        })
        .catch((err)=>console.log(err));
        this.setState({title:"",content:""});
    };


    render() {

        return (

            <div className="container mt-4">

                <h1>Create posts</h1> 
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                        className="form-control"
                        />    
                    </div>

                    <div className="form-group">
                        <label>Content:</label>
                        <textareabtn
                        rows={10}
                        type="text"
                        value={this.state.content}
                        onchange={this.handleChange}
                        name="content"
                        className="form-control"
                        ></textarea>
                    </div>    
                    <button type="submit" className="btn btn-primary">
                        post
                    </button>
                </form>
                              
            </div>
        );
    }
}

export default CreatePost;