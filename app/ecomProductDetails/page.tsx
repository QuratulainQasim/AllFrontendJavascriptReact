"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./style5.css"

const EcomProductDetails = () => {


    const searchParams = useSearchParams();
    const id = parseInt(searchParams.get("id"));
    const category = (searchParams.get("category"));
    const [quantity, setQuantity] = useState(1);

    const handleIncreament = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecreament = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
// add to cart item products.....
    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const itemIndex = cartItems.findIndex(item => item.id === id && item.category === category);
    
        if (itemIndex !== -1) {
            // If item already exists in cart, update its quantity
            cartItems[itemIndex].quantity += quantity;
        } else {
            // If item doesn't exist in cart, add it
            cartItems.push({ id, category, quantity });
        }
    
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };



    const storedProducts = localStorage.getItem("listedProducts");
    const parsedProducts = JSON.parse(storedProducts);
    const selectedProduct = parsedProducts.find((product: any) => product.ID === id && product.category === category);
    // console.log(selectedProduct);


    return (
        <>
            <h1>Listed Product Details</h1>
            <div className="smalldiv">
                <p>ID: {id}</p>
                <p>Category: {category}</p>
            </div>

            {selectedProduct && <div className="selecteddiv">
                <img className="detailpgimg" src={selectedProduct.image_url} alt={selectedProduct.name} />
                <div className="midDiv">
                    <h2>{selectedProduct.name}</h2>
                    <p>description:{selectedProduct.description}</p>
                    <p>price:{selectedProduct.price}</p>
                    <p>brand:{selectedProduct.brand}</p>
                    <p>{selectedProduct.material}</p>
                    <p>{selectedProduct.capacity}</p>
                    <p>{selectedProduct.color}</p>
                    <p>{selectedProduct.dishwasher_safe ? 'Dishwasher Safe' : 'Not Dishwasher Safe'}</p>
                    <p>{selectedProduct?.package_includes?.join(', ')}</p>
                    <p>{selectedProduct.in_stock ? 'In Stock' : 'Out of Stock'}</p>
                    <br /><br />
                    {/* add counter */}
                    <div>
                        <button onClick={handleDecreament}>-</button><span>{quantity}</span><button onClick={handleIncreament}>+</button>

                    </div><br />

                    <button className="addToCartButton" onClick={addToCart}>Cart</button>
                </div>
            </div>}

            <div>
                <Link href="/ecomproducts">Back to Products </Link>
            </div>
        </>
    );
};

export default EcomProductDetails;
