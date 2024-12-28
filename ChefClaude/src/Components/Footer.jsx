import React from 'react'

function Footer() {
    return (
        <>
        <div style={{ position: 'fixed',  width: '95%' }} className='bg-gray-400 ml-4 bottom-0 mb-7'>
            <h1>Ready for a recipe</h1>
            <div>
             Generate a recipe from your ingredients
              <button className='bg-red-700 text-white rounded-sm ml-5 mb-5 text-sm '>
                  Get a recipe
             </button>
                </div>
            </div>
        </>
    )
}
export default Footer
