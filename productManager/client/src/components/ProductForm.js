import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
const ProductForm = () => {
    const [ title, setTitle] = useState("");
    const [ price, setPrice] = useState(0);
    const [ description, setDescription] = useState("");

    const onSubmitHandler = e => {
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                navigate('/products');
            })
            .catch(err=>console.log(err))
    }
    return(
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;