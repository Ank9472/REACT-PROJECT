import React from 'react'

function Jokes(props) {
    const [isShown, setIsShown] = React.useState(false);
    

 function toggle(e) {
        e.preventDefault();
        setIsShown(prevShown => !prevShown);
        
        console.log(isShown);
    }

    return (
    <>
        <button onClick={toggle}>
            {isShown ? "Hide" : "Show"}
        </button>
        {isShown && <p>{props.punchline}</p>}
    </>
    )
}
export default Jokes
