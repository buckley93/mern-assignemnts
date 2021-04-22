import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const Detail = (props) => {
    const [athlete, setAthlete] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes/' + props.id)
            .then(res => {
                setAthlete({
                    ...res.data
                })
            })
    }, []);
    return(
        <div>
            <p>Players Name: {athlete.name}</p>
            <p>Perferred position: {athlete.position}</p>
        </div>
    )
}

export default Detail;