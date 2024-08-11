import React, { useState } from 'react';
import Product from './product'; // Adjust the path as necessary

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100
    },
    {
      id: 2,
      name: "Product 2",
      price: 200
    },
    {
      id: 3,
      name: "Product 3",
      price: 300
    }
  ]);

// const params = useParams();
//   const [Cart, setCart] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://retoolapi.dev/GEatlr/data/${params.id}`)
//       .then((res) => {
//         setCart(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [params.id]);



  const handleDelete = (productToDelete) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productToDelete.id)
    );
  };

  const handleReset = () => {
    setProducts(prevProducts => 
      prevProducts.map(product => ({
        ...product,
        count: 0 // Reset count, ensuring to spread other properties
      }))
    );
  };

  return (
    <React.Fragment>
      <h1>ShoppingCart</h1>
      <button onClick={handleReset} className="btn btn-secondary btn-sm m-2">Reset</button>
      {products.map(product => (
        <Product 
          key={product.id}
          onDelete={handleDelete}
          product={product}
        >
          <h4>{product.id}</h4>
        </Product>
      ))}
    </React.Fragment>
  );
};

export default ShoppingCart;
