// import React, { useEffect } from "react";
"use client"
import { useEffect, useState } from "react";
import "./style3.css";
import Link from "next/link";

const Ecomproducts = () => {
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const totalQuantity = cartItems.reduce((total: any, item: { quantity: any; }) => total + item.quantity, 0);
        setCartQuantity(totalQuantity);
    }, []);


    const listedProducts = [
        {
            "ID": 1,
            "category": "kitchen",
            "name": "Stainless Steel Mixing Bowls Set",
            "price": "$39.99",
            "description": "Set of 5 with Non-Slip Silicone Base and Lids",
            "image_url": "/bowlsSet.jpg",
            "brand": "KitchenPro",
            "material": "Stainless Steel",
            "capacity": "Various sizes (1qt, 2qt, 3qt, 4qt, 5qt)",
            "color": "Silver",
            "dishwasher_safe": true,
            "package_includes": ["5 Mixing Bowls", "5 Lids"],
            "in_stock": true
        },
        {
            "ID": 2,
            "category": "office",
            "name": "Ergonomic Mesh Office Chair",
            "price": "$199.99",
            "description": "Adjustable Headrest",
            "image_url": "/chair.jpg",
            "brand": "ErgoComfort",
            "color": "Color: Black",
            "weight_capacity": "250 lbs",
            "adjustable_height": true,
            "warranty": "2-year warranty",
            "assembly_required": true,
            "dimensions": "25.2\"L x 24.6\"W x 42.1\"-45.7\"H"
        },
        {
            "ID": 3,
            "category": "health and care",
            "name": "Electric Toothbrush",
            "price": "$69.99",
            "description": "Rechargeable Sonic Toothbrush with 4 Brush Heads",
            "image_url": "/electricToothBrush.jpg",
            "brand": "SonicSmile",
            "brushing_modes": ["Clean", "Sensitive", "Massage", "Whiten"],
            "power_source": "Lithium-ion battery",
            "charging_time": "4 hours",
            "waterproof": true,
            "color_options": ["White", "Black", "Blue"],
            "replacement_brush_heads_available": true,
            "smart_features": false
        }
    ];


    // Save the array of products in local storage
    localStorage.setItem("listedProducts", JSON.stringify(listedProducts));
    // Empty dependency array ensures this effect runs only once, on component mount

    return (
        <>
          <div> <img className="cartIcon" src="/addCartButton.jpg" alt="" /> <h4 className="cartt" >Cart</h4>
          <p className="cartP"> Returns  <br /> <b>&  orders</b>  </p>  </div>
            <div className="biggestDiv">
                <h1>All Listed Products</h1>
                <div className="productContainer">
                    {listedProducts.map((product, index) => (
                        <Link
                            key={index}
                            href={`/ecomProductDetails?category=${product.category}&id=${product.ID}`}
                            passHref
                        >
                            <div className="productDiv">
                                <img src={product.image_url} alt={product.name} />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p className="cartQuantity">{cartQuantity}</p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </>
    );
};

export default Ecomproducts;
