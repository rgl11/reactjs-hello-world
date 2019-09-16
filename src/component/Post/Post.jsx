import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/efsPPKSsl-g/hqdefault.jpg?sqp=-oaymwEiCMQBEG5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDD7RtBFZwGYuI50UrO4tUd1THQ-g" alt=""/>
            </div>
            <div className="content">
                <p className="title">{props.title} </p>
                <p className="desc">{props.desc} </p>
            </div>
        </div>  
    );

}

export default Post;