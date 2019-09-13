import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/efsPPKSsl-g/hqdefault.jpg?sqp=-oaymwEiCMQBEG5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDD7RtBFZwGYuI50UrO4tUd1THQ-g" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">desc here</p>
        </div>
    )
}

export default YouTubeComp;