import './App.css';
import NavBar from './components/navbar/navbar';
import Cards from './components/card/cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from '../src/routes/routes'
import Watchlist from './components/watchlist/watchlist';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <div>
      <Routes/>  
      {/* <Watchlist/> */}
    </div>
  );
}

export default App;
