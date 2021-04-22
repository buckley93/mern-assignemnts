import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AthleteForm from '../components/AthleteForm'
import AthleteList from '../components/AthleteList';

const Main = () =>{
    const [athletes, setAthletes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setAthletes(res.data);
                setLoaded(true);
            })
    }, []);

    const removeFromDom = athleteId => {
        setAthletes(athletes.filter(athlete => athlete._id !== athleteId));
    }
    return(
        <div>
            { loaded && <AthleteList athletes={athletes} removeFromDom={removeFromDom}/> }
        </div>
    )
}

export default Main;