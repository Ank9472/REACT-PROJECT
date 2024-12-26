import React from 'react'
import Contact from './Components/Contact'
function ContProps() {
    return (
        <div>
            <Contact
    image="images/mr-whiskerson.png"
    name="Mr. Whiskerson"
    phone="(212) 555-1234"
    email="mr.whiskaz@catnap.meow"
    />
    <Contact
      image="images/Fluffykins.png"
      name="Fluffykins"
      phone="(212) 555-2345"
      email="fluff@meow.meow"
    />
    <Contact
      image="images/Felix.png"
      name="Felix"
      phone="(212) 555-3456"
      email="felix@meow.com"
    />
    <Contact
      image="images/pumpkin.png"
      name="Pumpkin"
      phone="(212) 555-4567"
      email="pumpkin@meow.com"
    />
        </div>
    )
}

export default ContProps
