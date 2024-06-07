import React, { ChangeEvent, useEffect, useState } from 'react';
import ProductCard from '../myProduct2/productCard';

import './style.css';
const ProductList = () => {

  const [newArray, setnewArray] = useState<any[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>('');
  const [cart, setCart] = useState([]);



  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const handlUpdateCart = (product: any) => {

    setCart([...cart, product]);
  }

  const products = [
    {
      id: 1,
      name: 'Cetaphil baby lotion',
      imageUrl: 'https://m.media-amazon.com/images/I/71bRcfJwFyL._SL1500_.jpg',
      price: 20.99,
      discountPrice: 15.99,
      brandName: 'Brand A',
      productType: "Baby Product "

    },
    {
      id: 2,
      name: 'Strainer ',
      imageUrl: 'https://m.media-amazon.com/images/I/61Wt0QY-adL._AC_SL1068_.jpg',
      price: 30.49,
      productType: "Kitchen product",
      discountPrice: 26.99,
      brandName: 'Brand B',


    },
    {
      id: 3,
      name: 'Vegetable Chopper',
      imageUrl: 'https://m.media-amazon.com/images/I/81tV-nZg9-L._AC_SL1500_.jpg',
      price: 25.0,
      discountPrice: 18.99,
      brandName: 'Brand C',
      productType: "Kitchen product"

    },
    {
      id: 4,
      name: 'Popcorn Microwave',
      imageUrl: 'https://m.media-amazon.com/images/I/710PGXTh-4L._AC_SL1500_.jpg',
      price: 25.0,
      discountPrice: 18.99,
      brandName: 'Brand D',
      productType: "Kitchen product"
    },
    {
      id: 5,
      name: 'Pizza cutter',
      imageUrl: 'https://m.media-amazon.com/images/I/7191mnp3aVL._AC_SL1500_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand E',
      productType: "Kitchen product"
    },
    {
      id: 6,
      name: 'Hash Browns',
      imageUrl: 'https://m.media-amazon.com/images/I/71Ejqyr1fQL._AC_SL1500_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand F',
      productType: "Kitchen product"
    },
    {
      id: 7,
      name: 'Peeler',
      imageUrl: 'https://m.media-amazon.com/images/I/41KRDA7G54L._AC_SL1500_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand G',
      productType: "Kitchen product"
    },
    {
      id: 8,
      name: 'Meat chopper',
      imageUrl: 'https://m.media-amazon.com/images/I/51C4GDzNqgL._AC_SL1500_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand H',
      productType: "Kitchen product"
    },
    {
      id: 9,
      name: 'cleaning tool',
      imageUrl: 'https://m.media-amazon.com/images/I/61ZyeBBNL4L._AC_SL1001_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand I',
      productType: "Kitchen product"
    },
    {
      id: 10,
      name: "cheese grater",
      imageUrl: 'https://m.media-amazon.com/images/I/81NSZVibRoL._AC_SL1500_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand j',
      productType: "Kitchen product"
    },
    {
      id: 11,
      name: " Kitchen Scissors",
      imageUrl: 'https://m.media-amazon.com/images/I/61T3ydt9mdL._AC_SL1500_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand K',
      productType: "Kitchen product"
    },
    {
      id: 12,
      name: "Food slicer ",
      imageUrl: 'https://m.media-amazon.com/images/I/714VskeFpuL._AC_SL1000_.jpg',
      price: 15.5,
      discountPrice: 13,
      brandName: 'Brand L',
      productType: "Kitchen product"
    },
  ];
  const parentFunction = (pro: any) => {
    let previousArray = [...newArray];
    previousArray.push(pro);
    setnewArray(previousArray);
  }
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value);
  }


  return (
    <>
      <h1 className='card-name'>Product Card</h1>

      <input className='searchInput' type="text" placeholder='Search Item' value={searchProduct} onChange={handleSearchChange} />


      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id}
            updateFunction={handlUpdateCart}
            product={product}
          />

        ))}


      </div>
      <h2>Cart products</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>


      <div>

        <table className='product-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Discount Price</th>
              <th>productType</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.discountPrice}</td>
                <td>{item.productType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </>)
};

export default ProductList;