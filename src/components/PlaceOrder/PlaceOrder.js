import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Your Order Placed</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;