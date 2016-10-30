/**
 * Created by Lam on 16/10/30.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem.jsx';

const order = {
    title: 'Fresh fruits package',
    image: './dist/img/foot.jpg',
    initialQty: 3,
    price: 8
};

ReactDOM.render(
    <CartItem title={order.title}
             image={order.image}
             initialQty={order.initialQty}
             price={order.price}
    />,
    document.getElementById('root')
)