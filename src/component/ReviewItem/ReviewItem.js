import React from 'react';

const ReviewItem = (props) => {


    const {name,quantity,key}=props.product;
    return (
        <div>
            <h2>this is to review</h2>
    <h4>{name}</h4>
    <p>{quantity}</p>
    <button onClick={()=>  props.removeProduct(key)} className="main-button">remove</button>
        </div>
    );
};

export default ReviewItem;
