import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {



  const{name,price,seller,img,key}=props.pop;
    


    return (
        <div className="product">


<div>

<img src={img} alt=""/>

</div>
<div>

<h4><Link to={"/"+key}>{name}</Link> </h4>
<br/>
    <p><small>by:{seller}</small></p>
    <p>${price}</p>

{
   props.show && 
    <button onClick={()=>props.handleAdd(props.pop)} className="main-button">Add to cart</button>


}

</div>


            

  
        </div>
    );
};

export default Product;