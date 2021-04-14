import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])
   
    return(
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList product={product} /> }
        </div>
    )
}

export default Main;