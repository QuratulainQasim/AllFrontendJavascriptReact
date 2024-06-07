import React, { useState } from "react";

function Garage({ cars = ['Ford', 'BMW', 'Audi'] }) {
    const [newCar, setNewCar] = useState(""); // State to hold the value of the new car

    const addCar = () => {
        if (newCar.trim() !== "") {
            // Only add the new car if it's not empty
            setCars([...cars, newCar]); // Add the new car to the list of cars
            setNewCar(""); // Clear the input field after adding the car
        }
    };

    return (
        <>
            <h1>learning code</h1>
            <h1>Garage</h1>

            {cars.length > 0 && (
                <h3>
                    You have {cars.length} car{cars.length !== 1 ? "s" : ""} in your garage.
                </h3>
            )}

            <div>
                <input
                    type="text"
                    value={newCar}
                    onChange={(e) => setNewCar(e.target.value)}
                    placeholder="Enter a new car"
                />
                <button onClick={addCar}>Add Car</button>
            </div>

            {/* Display the list of cars */}
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
        </>
    );
}

export default Garage;
