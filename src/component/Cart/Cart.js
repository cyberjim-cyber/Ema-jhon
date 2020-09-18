import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;

// const totalprice=cart.reduce((total,product)=>total+product.price,0)



let total=0;
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
     total=total+product.price;
    
}

    return (
        <div>

<h4>order summery</h4>
<h5>items ordered:{cart.length} </h5>
    <p>total price {total}</p>

<Link to="/review"> <button className="main-button">review order</button></Link>


        </div>
    );
};

export default Cart;