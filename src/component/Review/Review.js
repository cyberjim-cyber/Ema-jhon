import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [cart,setcart] =   useState([])

useEffect(()=>{

const savecart=getDatabaseCart();
const productskeys =Object.keys(savecart)

const counts=productskeys.map(key=>{

    const product=fakeData.find(pd=>pd.key === key)
    product.quantity=savecart[key]
    return product
})
setcart(counts)
console.log(counts)


},[])


const removeProduct=(productkey)=>{

console.log("remove",productkey)

const newcart=cart.filter(pd=>pd.key !==productkey)
setcart(newcart)
removeFromDatabaseCart(productkey)

}

const history= useHistory()

const place=()=>{
    history.push("/shipment")
}

    return (
        <div className="shop-container">



            <div className="product-container">

            <h2>cart item {cart.length}</h2>
   {

       cart.map(pd=> <ReviewItem  removeProduct={removeProduct} product={pd}></ReviewItem>)
   }

            </div>
           
           <div className="cart-container">

<h2>this is remove cart</h2>
<Cart cart={cart}></Cart>
{
    <button onClick={place}>place order</button>
}

           </div>
   
        </div>
    );
};

export default Review;