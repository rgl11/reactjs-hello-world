import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/people" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">desc here</p>
        </div>
    );
}


YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here'
}

export default YouTubeComp;