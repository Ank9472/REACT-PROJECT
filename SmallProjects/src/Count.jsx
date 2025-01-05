import React from 'react';
import './App.css';
function Count(props) {
    console.log("Count rendered");
    return (
        <div>
            <h2 className='count'>{props.number}</h2>
        </div>
    );
}

export default Count;
