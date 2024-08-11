import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/navbar';
import MyCard from '../../components/card/cards';

const Home = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://retoolapi.dev/GEatlr/data')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <>
  
      <h1>Home</h1>
      <div className='d-flex justify-content-center flex-wrap gap-4'>
      {Products.map((Product, index) => (
        <div key={index}>
          <MyCard
            name={Product.name}
            logo={Product.logo}
            url={`/detailes/${Product.id}`}
            btnName="View Details"
            width="18rem"
            onAddToCart={handleAddToCart}
          />
        </div>
      ))}</div>
    </>
  );
};

export default Home;
