import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/navbar';
import MyCard from '../../components/card/cards';

const Home = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=aceb067a920ac17155823a50c94ed9d5')
      .then((res) => {
        setProducts(res.data.results); // Access the 'results' array from the response
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
      <NavBar />
      <h1>Home</h1>
      <div className='d-flex justify-content-center flex-wrap gap-4'>
        {Products.map((Product, index) => (
          <div key={index}>
            <MyCard
              name={Product.title} // TMDB uses 'title' for movie names
              logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`} // Use 'poster_path' for movie posters
              url={`/details/${Product.id}`} // Corrected the path name from 'detailes' to 'details'
              btnName="View Details"
              width="18rem"
              onAddToCart={() => handleAddToCart(Product)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
