import React from "react";
import "./style7.css";

const HomeAndKitchen = () => {
    const arrayofimg = [
        "/kitchenTowel.webp", 
        "/kitchenscale.webp", 
        "/kitchenshears.webp", 
        "/bowlsSet.jpg", 
        "/eggBoiler.webp", 
        "/cookingutensils.webp", 
        "/griddleAccessaries.webp",  
        "/strainer.webp", 
        "/sealer.webp", 
        "/sandwichpreser.webp", 
        "/qimamixer.webp", 
        "/pizzapeel.webp"
    ];

    return (
        <>
            <h1>Home and Kitchen products</h1>
            <div className="image-container">
                {arrayofimg.map((image, index) => (
                    <img key={index} src={image} alt={`Product ${index + 1}`} />
                ))}
            </div>
        </>
    );
};

export default HomeAndKitchen;
