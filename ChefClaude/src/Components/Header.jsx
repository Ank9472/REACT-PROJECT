import React from 'react'
function Header() {
    return (
        <div className="flex justify-center">
        <h1 className='bg-white text-center mt-0 p-5 flex items-center justify-center gap-2 w-full font-bold'>
            <img 
                className="w-8 h-8  flex items-center justify-center" 
                src="https://cdn-icons-png.flaticon.com/128/10626/10626633.png" 
                alt="globe icon" 
            />
          <div className='text-3xl'> Chef Claude</div>
        </h1>
</div>
    )
}

export default Header
