import React from 'react';

function Practice() {
    function handleClick() {
        console.log("ANKIT TIWARI");
    }

    return (
        <main>
            <div className='flex justify-center items-center h-72 w-72 ml-56 '>
                <img 
                    src="https://dharmapublication.com/wp-content/uploads/2024/01/sumit-biswas-highresscreenshot00021-1024x876.jpg" 
                    alt="Example" 
                />
            </div>
            <button 
                onClick={handleClick} 
                className='text-black bg-red-700 ml-80 rounded-md'>
                Click Me
            </button>
        </main>
    );
}

export default Practice;


