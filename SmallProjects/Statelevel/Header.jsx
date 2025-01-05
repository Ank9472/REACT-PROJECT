import React, { useState } from 'react';
import avatar from '/user (1).png';
function Header() {
    const [userName, setUserName] = useState("Joe");

    return (
      <>
        <header >
        <img src={avatar} alt="user avatar"/>
        <div className=''>
        <p> {userName}</p>
        </div>
        </header>
      </>
    );
}

export default Header;
