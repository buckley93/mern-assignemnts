import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Detail = (props) => {
    const { removeFromDom } = props;
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                navigate('/products');
            })
    }

    return (
        <div>
            <p>Name: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}

export default Detail;