import React from 'react';
import Count from './Count';
function AddPart() {
    const [count, setCount] = React.useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    console.log("AddPart rendered");
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Count 
            number={count} />
            <div className="flex items-center space-x-4">
                <button className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center" onClick={increase}>
                    +
                </button>
                <button className="bg-red-500 text-white rounded-full h-10 w-10 flex items-center justify-center" onClick={decrease}>
                    -
                </button>
            </div>
        </div>
    );
}
export default AddPart;
