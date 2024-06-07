import React from "react";


const Amlearn = () => {

    const myArray =
        ['I am a Audi',
            'I am a BMW',
            'I am a Ford'];
    const laptops = [
        {
            brand: "Apple",
            model: "MacBook Pro",
            screenSize: 13.3,
            processor: "Intel Core i5",
            ram: 8,
            storage: "256GB SSD",
            price: 1299.99
        },

        {
            brand: "Dell",
            model: "XPS 15",
            screenSize: 15.6,
            processor: "Intel Core i7",
            ram: 16,
            storage: "512GB SSD",
            price: 1599.99
        },
        {
            brand: "HP",
            model: "Spectre x360",
            screenSize: 13.3,
            processor: "Intel Core i7",
            ram: 16,
            storage: "1TB SSD",
            price: 1499.99
        }

    ]
    return (
        <>


            <h2>My List</h2>
            <ul>
                {
                    myArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    )
                    )
                }
            </ul>
            {/* an order list  */}
            <ol>
                {
                    laptops.map((laptop, index) => (
                        <li key={index}>
                            <p>Brand: {laptop.brand}</p>
                            <p>Model: {laptop.model}</p>
                            <p>Screen Size: {laptop.screenSize}</p>
                            <p>Processor: {laptop.processor}</p>
                            <p>RAM: {laptop.ram}GB</p>
                            <p>Storage: {laptop.storage}</p>
                            <p>Price: ${laptop.price}</p>
                        </li>
                    ))
                }
            </ol>
        </>
    )
}
export default Amlearn;