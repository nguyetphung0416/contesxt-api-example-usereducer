import React, { memo, useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';

const Item = (props) => {
    const { info: { name, price } } = props;
    const cart = useCart();
    const [disableBtn, setDisable] = useState(true);
    useEffect(() => {
        if (cart.state.quantity <= 0) {
            setDisable(true);
        }
        else {
            setDisable(false);
        }
    }, [cart.state.quantity]);

    return (
        <>
            {console.log('item')}
            <h3>{name}</h3>
            <div>{price}</div>
            <button onClick={cart.handleIncrement}>+</button>
            <button onClick={cart.handleDecrement} disabled={disableBtn}>-</button>
        </>
    )
};

export default memo(Item);