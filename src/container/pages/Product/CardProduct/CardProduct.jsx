import React, { Component } from 'react';
import './CardProduct.css';
import Counter from './Counter';

class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://placeimg.com/200/150/people" alt=""/>
                </div>                
                <p className="product-title">
                    Daging Ayam
                </p>
                <p className="product-price">Rp 410.000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </div>  

        );
    }
}

export default CardProduct;