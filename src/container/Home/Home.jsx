import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YoutubeComp';

class Home extends Component{
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12"  
                    title="Judul satu lorem"/>
                <YouTubeComp 
                    time="9.90" 
                    title="Judul dua lorem"/>
                <YouTubeComp 
                    time="6.90" 
                    title="Judul tiga lorem"/>
                <YouTubeComp 
                    time="9.10" 
                    title="Judul empat lorem"/>
                <YouTubeComp/>
            </div>
        )
    }
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here'
}

export default Home;