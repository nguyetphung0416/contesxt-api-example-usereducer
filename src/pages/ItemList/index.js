import React, { memo } from 'react';
import Item from './Item';

const ITEM_INFO = {
    name: 'Item',
    price: 100,
};

const ItemList = (props) => {
    return (<div>
        {console.log('itemlist')}
        {[0, 1, 2].map((item, index) => {
            return <Item
                key={index}
                info={ITEM_INFO}
            />
        })}
    </div>)
};

export default memo(ItemList);