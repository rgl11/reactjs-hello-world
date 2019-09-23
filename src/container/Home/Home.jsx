//libraries
import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//page
import Product from '../pages/Product/Product';
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';


class Home extends Component{
    state = {
        showComponent: true
    }
    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <div>
                        <Link to='/'> BlogPost </Link>
                        <Link to='/product'> Product </Link>
                        <Link to='/youtube-component'> YouTubeCompPage </Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} /> 
                    <Route path="/youtube-component" component={YouTubeCompPage} /> 
                </Fragment>
            </BrowserRouter>
        )
    }
}



export default Home;