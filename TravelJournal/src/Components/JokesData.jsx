import React from 'react'

function JokeData() {
    return (
        <>
        {props.setup && <p className="setup">Setup: {props.setup}</p>}
        <p className="punchline">Punchline: {props.punchline}</p>
        <hr />
    </>
    )
}

export default JokesData
