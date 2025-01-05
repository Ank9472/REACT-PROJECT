import React from 'react';
import Star from './Star';

function Identity() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });
      
    return (
        <main className="flex items-center justify-center h-screen bg-sky-950 text-black">
            <article className="card bg-white shadow-lg rounded-lg overflow-hidden p-4">
                <img
                    src="./public/user.png"
                    alt="User profile picture of John Doe"
                    className="w-24 h-24 rounded-full mx-auto"
                />
                <div> 
                <Star isFilled={contact.isFavorite}/>
                <h2 className="name text-center text-xl font-bold mt-4">
                 {contact.firstName} {contact.lastName}
                </h2>
                <p className="contact text-center text-gray-600">{contact.phone}</p>
                <p className="text-center text-gray-600">{contact.email}</p>
                </div>
            </article>
        </main>
    );
}

export default Identity;
