// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from '../pages/register/register';
// import NotfoundPage from '../pages/notfound/notfound';
// import NavBar from '../components/navbar/navbar';
// import ProdDetalies from '../components/Products/productDetailes';
// import Homepage from '../pages/home/home';
// import LogIn from '../pages/log in/logIn';
// import Cart from '../components/ShoppingCart/shopping Cart';
// import { useSelector } from 'react-redux';

// export default function AppRoute() {
//   const checkRedux =useSelector((state)=>(state.myLang.lang))
//   const MyTheme = useSelector((state) => state.myTheme.theme);


//   return (
//     <BrowserRouter>
//       <div className={MyTheme === "light" ? "text-dark bg-light" : "text-light bg-dark"}>

//           <div dir={checkRedux==="EN"? "ltr":"rtl"}>

//       <NavBar />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/detailes/:id" element={<ProdDetalies />} />
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/cart" element={<Cart />} />

//           <Route path="*" element={<NotfoundPage />} />
//         </Routes>
//       </Suspense>
//       </div>
//       </div>

//     </BrowserRouter>
//   );
// }

// routes
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../pages/register/register';
import NotfoundPage from '../pages/notfound/notfound';
import NavBar from '../components/navbar/navbar';
import ProdDetalies from '../components/Products/productDetailes';
import Homepage from '../pages/home/home';
import LogIn from '../pages/log in/logIn';
import Cart from '../components/ShoppingCart/shopping Cart';
import { useSelector } from 'react-redux';
import Watchlist from '../components/watchlist/watchlist';
import Details from '../components/details/details';

export default function AppRoute() {
  const checkRedux = useSelector((state) => state.myLang.lang);
  const MyTheme = useSelector((state) => state.myTheme.theme);

  return (
    <BrowserRouter>
      <div className={MyTheme === "light" ? "text-dark bg-light" : "text-light bg-dark"}>
        <div dir={checkRedux === "EN" ? "ltr" : "rtl"}>
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/details" element={<Details />} />
              <Route path="/detailes/:id" element={<ProdDetalies />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="*" element={<NotfoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
