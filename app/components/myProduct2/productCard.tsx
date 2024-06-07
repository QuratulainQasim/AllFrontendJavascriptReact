import { parse } from 'path';
import React, { useState } from 'react';
interface props {
    product: {
        id: number,
        name: string,
        imageUrl: string,
        brandName: string,
        price: string,
        productType: string,
        discountPrice: string,
        button: string,

    };

    updateFunction: (product: any) => void
}
const ProductCard = (Props: props) => {
    const { id, name, imageUrl, price, discountPrice, brandName, productType } = Props.product;


    const HandleAddToCart = () => {
        updateFunction(product);
    }


    return (
        <>
            <div className="product-card">

                <div className="product-details">
                    <img src={Props.product.imageUrl} alt={name} className="product-image" />
                    <div className='product-details' onClick={() => Props.updateFunction(Props.product)}><h3> name: {name} </h3>
                        <p>  Brand: {brandName} </p>
                        <p>   Price: ${price} </p>
                        <p>  Product Type: {productType} </p>
                        <p> Discount Price: ${discountPrice} </p>
                        <button onClick={HandleAddToCart}>add to cart</button>

                    </div>

                </div>
            </div>
        </>
    );


};

export default ProductCard;

