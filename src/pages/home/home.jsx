import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/navbar/navbar';
import MyCard from '../../components/card/cards';
import './home.css'
import { Link,NavLink } from 'react-router-dom';
import Details from '../../components/details/details';
const Home = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=aceb067a920ac17155823a50c94ed9d5')
      .then((res) => {
        setProducts(res.data.results); // Access the 'results' array from the response
      })
      .catch((err) => {
      });
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };
  function search(){
    let valueSearch = document.getElementById("search").value
    setProducts(Products.filter((movie)=>{
      return valueSearch == movie.title || movie.overview.includes(valueSearch)
    }))
    console.log(Products)
  }
  return (
    <>
      {/*strat search div */}
      <div className='p-3'>
        <div className="search p-5">
          <h1 className='py-3'>Welcome to our movie app</h1>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
          <div className="form d-flex gap-3">
            <input id='search' type="text" placeholder='Search and explore....' className='form-control'/>
            <button onClick={()=>{search()}} className='btn btn-warning'>Search</button>
          </div>
        </div>
      </div>
      {/*end search div */}  

      <div className='container-fluid py-5' >
        <div className="row gy-4">
        {Products.map((Product, index) => (
          
            <div key={index} className='col-2'>
              <MyCard
                name={Product.title} // TMDB uses 'title' for movie names
                logo={`https://image.tmdb.org/t/p/w500${Product.poster_path}`} // Use 'poster_path' for movie posters
                url={`/details/${Product.id}`} // Corrected the path name from 'detailes' to 'details'
                btnName="View Details"
                width="18rem"
                date={Product.release_date}
                onAddToCart={() => handleAddToCart(Product)}
              />
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;
