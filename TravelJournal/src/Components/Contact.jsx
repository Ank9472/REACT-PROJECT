import React from 'react';

function Contact({ img, name, phone, email }) {
  return (
    <article className="contact-card text-black">
      <img
        src={img}
        alt={`Photo of ${name}`}
      />
      <h3>{name}</h3>
      <div className="info-group">
        <img
          src="phone-icon.png"
          alt="phone icon"
        />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img
          src="mail-icon.png"
          alt="mail icon"
        />
        <p>{email}</p>
      </div>
    </article>
  );
}

export default Contact;


/*  {What do props help us accomplish?  } 
 make a component more useable*/

/* How do you pass a prop into a component?
   <MyAwesomeHeader title="????"/>
/*

/* Can I pass a custom prop (e.g., blahblahblah={true}) to a native DOM element? (e.g., <div blahblahblah={true}>) Why or why not? 
 no because the jsx we use to descrbe the native DOM elements will only have the attributes/properties spcified in the HTML spec. (which doesn't include custom props)*/  


/* How do I receive props in a component?  
      function Navbar(props) {
        console.log(props.blahblahblah)
         return (
         <header>
           ...
           </header>
         )  
      }
*/

/* What data type is props when the component receives it? 
    an object*/
