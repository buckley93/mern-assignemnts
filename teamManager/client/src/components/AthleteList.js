import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
const AthleteList = (props) => {
    const deleteAthlete = (athleteId) => {
        axios.delete('http://localhost:8000/api/athletes/' + athleteId)
            .then(res => {
                window.location.reload(false);
            })
    }
    return(
        <div>
            <div>
            <p style={{display: 'inline-block', fontWeight: 'bolder' }}>List</p>
            <span> | </span>
            <Link to ="/new"><p style={{display: 'inline-block'}}>Add Player</p></Link>
            </div>            
        {props.athletes.map((athlete, index) => {
            return <p key={index}>
                <Link to ={"/athletes/" + athlete._id} >{athlete.name}</Link>
                 <span> | </span>
                <button onClick={(e) => {deleteAthlete(athlete._id)}}>
                    Delete
                </button>
                </p>
        })}
        </div>
    )
}

export default AthleteList;