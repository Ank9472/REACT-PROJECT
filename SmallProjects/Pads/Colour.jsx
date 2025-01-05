import React from 'react'
import padsData from "./Pads"
function Colour() {
    const [pads, setPads] = React.useState(padsData)
    const darkMode = React.useState([true])
    
    /**
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     */
    
    const buttonElements = pads.map(pad => (
        <button 
        key={pad.id} 
        className={isdarkMode ? "bg-neutral-900" : "bg-red-600"}
        >
        </button>
    ))
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
export default Colour
