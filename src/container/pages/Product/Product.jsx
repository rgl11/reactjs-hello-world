import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';

class Product extends Component {
    state ={
        order: 4,
        name: 'Ghifar'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order : newValue
        })
    }

    render() {
        return (
            <Fragment>          
                <p>Product</p>     
                <hr/>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;