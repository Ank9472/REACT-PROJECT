import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
function Message() {
    const [unreadMessages, setUnreadMessages] = React.useState([["a"]]);
    function ToggleEvent() {
        setUnreadMessages(prevMessages => prevMessages.length < 0 ? [] : ["a","b","c","d"]);
        console.log(unreadMessages);
    }
    return (
    <div>
  <h1 className="text-4xl text-center font-bold">
  if (unreadMessages.length === 0) {
    text = "You're all caught up!"
} else if (unreadMessages.length === 1) {
    text = "You have 1 unread message!"
} 
else {
    text = "You have " + unreadMessages.length + " unread messages!"
} 
</h1>
      <button className='bg-red-900 text-center' onClick={ToggleEvent}>CLICK</button>
    </div>
   )
}  
export default Message


// // 
// 1. What is "conditional rendering"?
// When we want to only sometimes display something on the page
// based on some kind of condition.

// 2. When would you use &&?
// When you want to either display something or NOT display something.

// 3. When would you use a ternary?
// When you need to decide which of 2 things to display

// 4. What if you need to decide between > 2 options on
//     what to display?
// if...else if...else conditional or maybe a 'switch' statement.

// // 
















