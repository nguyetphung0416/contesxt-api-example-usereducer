import React, { memo, useReducer, useState } from 'react';
import NavBar from './NavBar';
import ItemList from './ItemList';
import StateContext from './Contexts/StateContext';
import DispatchContext from './Contexts/DispatchContext';
const App = () => {
    const initState = {
        quantity: 0
    };

    const counterReducer = (state, action) => {
        switch (action) {
            case 'INCREMENT':
                return {
                    ...state, quantity: state.quantity + 1
                }
            case 'DECREMENT':
                if (state.quantity > 0) {
                    return {
                        ...state, quantity: state.quantity - 1
                    }
                }
                else return { ...state };
            default:
                return initState;
        }
    }

    const [state, dispatch] = useReducer(counterReducer, initState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NavBar />
                <ItemList />
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export default memo(App);
