import React from 'react'

function Header() {
   
    return (
        <div className="flex justify-center">
                <h1 className='bg-red-500 text-center mt-0 p-5 flex items-center justify-center gap-2 w-full'>
                    <img 
                        className="w-8 h-8  flex items-center justify-center" 
                        src="https://cdn-icons-png.flaticon.com/512/44/44386.png" 
                        alt="globe icon" 
                    />
                    MY TRAVEL JOURNAL
                </h1>
        </div>
    )
}

export default Header
