import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }
    
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json);
            
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('http://localhost:3004/posts')
        .then((result)=>{
            //console.log(result.data);
            this.setState({
                post:result.data
            })
        })
    }

    render() {
        return (
            <Fragment>
                <div className="wrapContent">
                    <p>BlogPost</p>    
                    {
                        this.state.post.map(post =>{
                            return <Post key={post.id} title={post.title} desc={post.body}/>     
                        })
                    }
                               
                </div>
            </Fragment>
        );
    }
}

export default BlogPost;