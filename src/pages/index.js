import React, { memo, useReducer, useState } from 'react';
import NavBar from './NavBar';
import ItemList from './ItemList';
import { ProvideCart } from '../hooks/useCart';

const App = () => {
    return (
        <ProvideCart>
            <NavBar />
            <ItemList />
        </ProvideCart>
    );
}

export default memo(App);
