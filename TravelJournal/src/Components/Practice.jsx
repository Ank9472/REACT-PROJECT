import React from 'react'

function Practice() {
    const pokemon = ["bulbasaur","charmander","squirtle"];

    const paragra = pokemon.map((mon) => {
        return <p>{mon}</p>
    });
    
    console.log(paragra);
    
    return (
        <div>
           
        </div>
    );
}

export default Practice
