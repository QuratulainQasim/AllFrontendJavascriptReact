import React, { useState } from "react";
import "./conStyle.css";

const NewProject = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <div className="G-div">

                <h1>counter</h1>
                <h1>counter Start:{counter}</h1>
                <div className="buttonDiv">
                    <button onClick={increment}>+</button>
                    <br /><br />
                    <button onClick={decrement}>-</button>
                </div>
            </div>
        </>
    )
}
export default NewProject;