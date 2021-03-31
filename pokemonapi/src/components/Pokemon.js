import React, { useState } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                // console.log(response);
                return response.json();
            })
            .then((jsonPokemon) => {
                console.log(jsonPokemon.results);
                setPokemon(jsonPokemon.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={ getPokemon }>get every pokemon</button>
            {
                pokemon.map((pokemon, index) => (
                    <div key={ index }>
                        <p>{ pokemon.name }</p>
                    </div>
                ) )
            }
        </div>
    );
}

export default Pokemon;