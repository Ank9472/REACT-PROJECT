import React from 'react'
import JokesData from '../Jokes/JokesData'
function JokesData() {
    return (
        <div>
            <Jokes 
                setup='I got my daughter a fridge for her birthday.'
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Jokes
                setup='How did the hacker escape the police?'
                punchline='He ransomware.'
            />
            <Jokes 
                setup='Why don’t scientists trust atoms?'
                punchline='Because they make up everything.'
            />
            <Joke 
                setup='What do you call a fish wearing a crown?'
                punchline='King Cod.'    
            />
            <Joke 
                setup='What do you call a pile of cats?'
                punchline='A meowtain.'
            />
        </div>   
    )
}

export default Jokes
