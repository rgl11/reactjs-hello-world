import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';

class YouTubeCompPage extends Component{
    render(){
        return(
            <Fragment>
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
            </Fragment>
        )
    }
}

export default YouTubeCompPage;