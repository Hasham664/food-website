import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import AppDownload from './components/AppDownload/AppDownload';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/menu' element={<FoodDisplay category='All' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mobile' element={<AppDownload />} />
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
