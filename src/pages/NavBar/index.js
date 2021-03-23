import React, { memo } from 'react';
import { useCart } from '../../hooks/useCart';

const styles = {
    quantity: {
        color: 'red',
        fontSize: '20px'
    }
};

const NavBar = () => {
    const cart = useCart();
    console.log('quantity', cart.state.quantity);

    return (
        <>
            Quantity item in cart
            <span style={styles.quantity}> {cart.state.quantity}</span>
        </>
    )
};

export default memo(NavBar);