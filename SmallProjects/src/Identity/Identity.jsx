import React from 'react';
function Identity() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    });
    let startIcon = contact.isFavorite ? starFilled : starEmpty
    function toggleFavorite() {
         setContact(prevcontact => ({
        ...prevcontact  , 
            isFavorite: !prevcontact.isFavorite
        }  ) 
        ) 
    }
    return (
        <main>
            <article className="card">
                <img
                    src=""
                    alt="User profile picture of John Doe"
                />
                <div className="button">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite}
                        className={contact.isFavorite ?"Remove from favorites" : "Add to Favorites" }
                    >
                        <img
                            src={startIcon}
                            alt= {contact.isFavorite ? "Start Icon filled" :"star Icon Empty" }
                            className="favorite"
                        />
                  {setContact}  </button>
                </div>
                <h2 className="name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="contact">{contact.phone}</p>
                <p>{contact.email}</p>
            </article>
        </main>
    );
}
export default Identity;
