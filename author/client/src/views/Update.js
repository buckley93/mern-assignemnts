import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState();
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res=> {
                setName(res.data.name);
                console.log(res.data.name);
                console.log("in the useEffect in Update.js");
            })
    }, [])
    const UpdateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => {
                console.log("in the UpdateAuthor in Update.js");
                console.log(res);
                navigate('/')
            })
            .catch(err=>{
                console.log(err);
                const errorsResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorsResponse)) {
                    errorArr.push(errorsResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return(
        <div>
            <h1>Edit Author</h1>
            <Link to = {"/"}>
                Home
            </Link>
            <form onSubmit={UpdateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Authors Name: </label>
                    <input type="text"
                    name="name"
                    value={name}
                    onChange = {(e) => { setName(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
}

export default Update;