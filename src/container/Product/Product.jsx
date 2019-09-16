import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';

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
                <div className="header">
                    <div className="logo">
                        <img src="https://www.youtube.com/yts/img/ringo/hitchhiker/logo_small_2x-vfl4_cFqn.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;