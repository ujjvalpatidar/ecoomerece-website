import React from 'react'
import { NavLink } from 'react-router-dom';

const Section = () => {
  return (
    <>
      <div className='maindiv'>
          <div className='empty'>
          <p className='pa'>Welcome To</p>
            <h2><span className="tech-h22">TECH</span> STORE</h2>
            <p className='pa'>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app</p>
          <NavLink to="/products">
          <button className='all-btn'>SHOP NOW</button></NavLink></div>
          <div className='heeroimage'>
            <div className='black-box'></div>
            <div className='green-box'></div>
          </div>
      </div>
    </>
  );
}

export default Section;
