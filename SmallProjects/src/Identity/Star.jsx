import React, { useState } from 'react';

const starFilled = 'public/newFilled.png';
const starEmpty = 'public/oldFilled.png';

function Star(props) {
    const [isFavorite, setIsFavorite] = useState(props.isFilled);
    function toggleFavorite() {
        setIsFavorite(prevIsFavorite => !prevIsFavorite);
    }
    let starIcon = isFavorite ? starFilled : starEmpty;
    return (
        <button
            onClick={toggleFavorite}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="bg-gray-200 rounded-full p-2"
        >
            <img
                src={starIcon}
                alt={isFavorite ? "New filled star" : "Old empty star"}
                className="w-6 h-6"
            />
        </button>
    )
}

export default Star;
