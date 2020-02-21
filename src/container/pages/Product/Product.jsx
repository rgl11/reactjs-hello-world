import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';

class Product extends Component {
    // state ={
    //     order: 4,
    //     name: 'Ghifar'
    // }

    handleCounterChange = (newValue) => {
        this.setState({
            order : newValue
        })
    }

    render() {
        return (
            <Fragment>          
                <p>Product</p>     
                <div className="troley">                    
                    <div className="count">{this.props.order}</div>
                </div>
                <hr/>
                <CardProduct/>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return{
        order: state.totalOrder
    }
}
export default connect(mapStateToProps)(Product);