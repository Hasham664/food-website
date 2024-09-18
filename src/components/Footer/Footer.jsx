import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            veritatis illum corporis maxime. Dolores maiores sit, quidem
            adipisci, placeat molestias nihil velit provident alias numquam
            possimus. Aspernatur iusto quia dicta.
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-318-766-081-5</li>
            <li>m.hasham3222@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>copyright 2024 @m.hasham3222.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer