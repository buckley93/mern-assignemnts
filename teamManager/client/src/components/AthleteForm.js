import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

const AthleteForm = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const onSubmitHandler = e => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/athletes', {
            name,
            position
        })
            .then(res=>{
                console.log(res);
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Players Name: </label><br/>
                    <input type="text" onChange = {(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label>Preffered Position</label><br />
                    <input type="text" onChange = {(e) => setPosition(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AthleteForm;