import React, { memo, useContext, useState } from 'react';
import StateContext from '../Contexts/StateContext';

const styles = {
    quantity: {
        color: 'red',
        fontSize: '20px'
    }
};

const NavBar = () => {
    const stateCtx = useContext(StateContext);
    console.log('quantity', stateCtx);

    return (
        <>
            Quantity item in cart
            <span style={styles.quantity}> {stateCtx.quantity}</span>
        </>
    )
};

export default memo(NavBar);