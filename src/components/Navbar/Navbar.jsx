import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
function Navbar({ setShowLogin }) {
  const [showInput, setShowInput] = useState(false);
const {getTotalCartAmount} = useContext(StoreContext)
  

  const [menu, setMenu] = useState('home');
  // showSidebar
  function showSidebar() {
    const sidebar = document.querySelector('.navbar-phone');
    sidebar.style.display = 'flex';
  }
  // hideSidebar
  function hideSidebar() {
    const sidebar = document.querySelector('.navbar-phone');
    sidebar.style.display = 'none';
  }
  return (
    <>
      <div className='navbar-phone'>
        <ul className='navbar-menu2'>
          <li onClick={hideSidebar} className='close'>
            <img src='/close.png' alt='' />
          </li>
          <Link to='home'>
            <li
              onClick={() => setMenu('home')}
              className={menu === 'home' ? 'active' : ''}
            >
              home
            </li>
          </Link>
          <Link to='menu'>
            <li
              onClick={() => setMenu('menu')}
              className={menu === 'menu' ? 'active' : ''}
            >
              menu
            </li>
          </Link>
          <Link to='mobile'>
            <li
              onClick={() => setMenu('mobile-app')}
              className={menu === 'mobile-app' ? 'active' : ''}
            >
              mobile app
            </li>
          </Link>
          <li
            onClick={() => setMenu('contact-us')}
            className={menu === 'contact-us' ? 'active' : ''}
          >
            contact us
          </li>
        </ul>
      </div>

      {/* mobile-navbar  */}

      <div className='navbar'>
        <Link to='/'>
          <img className='logo' src={assets.logo} alt='' />
        </Link>
        <ul className='navbar-menu hidePhone'>
          <Link to='home'>
            <li
              onClick={() => setMenu('home')}
              className={menu === 'home' ? 'active' : ''}
            >
              home
            </li>
          </Link>
          <Link to='menu'>
            <li
              onClick={() => setMenu('menu')}
              className={menu === 'menu' ? 'active' : ''}
            >
              menu
            </li>
          </Link>
          <Link to='mobile'>
            <li
              onClick={() => setMenu('mobile-app')}
              className={menu === 'mobile-app' ? 'active' : ''}
            >
              mobile app
            </li>
          </Link>
          <li
            onClick={() => setMenu('contact-us')}
            className={menu === 'contact-us' ? 'active' : ''}
          >
            contact us
          </li>
        </ul>

        <div className='navbar-right'>
              <img src={assets.search_icon} alt='' />
         

          <div className='navbar-search-icon'>
            <Link to='/cart'>
              <img src={assets.basket_icon} alt='' />
            </Link>
            <div className={getTotalCartAmount()===0?'':'dot'}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>

        <li onClick={showSidebar} className='manu'>
          <img src='/manu.png' alt='' />
        </li>
      </div>
    </>
  );
}

export default Navbar;
