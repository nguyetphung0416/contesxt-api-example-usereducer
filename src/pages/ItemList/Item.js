import React, { memo, useContext } from 'react';
import DispatchContext from '../Contexts/DispatchContext';
// import StateContext from '../Contexts/StateContext';

const Item = (props) => {
    const { info: { name, price } } = props;
    const dispatchCtx = useContext(DispatchContext);
    // const stateCtx = useContext(StateContext); 

    const handleIncrement = () => {
        dispatchCtx('INCREMENT');
    };
    const handleDecrement = () => {
        // if (stateCtx.quantity > 1) {
        dispatchCtx('DECREMENT');
        // }
    };

    return (
        <>
            {console.log('item')}
            <h3>{name}</h3>
            <div>{price}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    )
};

export default memo(Item);