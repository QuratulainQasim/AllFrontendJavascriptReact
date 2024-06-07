// Counter.js
import React, { useState } from 'react';

import "./counterStyle.css"

const Counter = () => {
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='counterMainDiv'>
            <h1>Counter</h1>

            <h2>Current Count:{count}</h2>


            <img className='incrementButton' src="incrementButton.png" alt="" onClick={increment} />

            <br /><br />

            <img className="decrementButton" src="decrementButton.png" alt="" onClick={decrement} />

        </div>
    );
};

export default Counter;
