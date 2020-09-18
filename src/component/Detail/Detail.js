import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Detail = () => {

    const {ke}   = useParams()

    const product=  fakeData.find(pd=>pd.key===ke)
    console.log(product)

    return (
        <div>
            <h2>{ke}detils coming sonn</h2>
            <Product show={false} pop={product}></Product>
        </div>
    );
};

export default Detail;