import React from 'react';

import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../product/Product'

import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const ten=fakeData.slice(0,10);
const [products,setproducts]=useState(ten)

const [cart,setcart]=useState([])

const handle=(produc)=>{

    console.log(produc)

const newCart=[...cart,produc]
setcart(newCart)
const sameProduct=newCart.filter(pd=>pd.key===produc.key)
const count=sameProduct.length
addToDatabaseCart(produc.key,count)
}



    return (
        <div className="shop-container">
           <div className="product-container">

           
{/* {
products.map(pro=><Product handleAdd={handleAdd} pop={pro}></Product>)

} */}

{

products.map(productt=><Product show={true} handleAdd={handle} pop={productt}></Product>)
}

           </div>
 
<div className="cart-container">

<Cart cart={cart}></Cart>
</div>




        </div>
    );
};

export default Shop;