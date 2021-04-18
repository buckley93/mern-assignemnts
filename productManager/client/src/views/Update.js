import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Navigate } from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    useEffect (() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPrice(res.data.price);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        console.log("in update.js")
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            description,
            price
        })
        .then(res => {
            console.log(res);
            navigate("/products")
        });
    }

    return(
        <div>
            <h1>Edit Product</h1>
            <form onSubmit = {updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
                </p>
                <input type="submit" >
                </input>
            </form>
        </div>
    )
}

export default Update;