import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    //refactored code
    const createProduct = product => {
        axios.post('http://localhost:8000/api/createProduct', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }
   
    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr />
            {loaded && <ProductList product={products} removeFromDom={removeFromDom} /> }
        </div> 
    )
}

export default Main;