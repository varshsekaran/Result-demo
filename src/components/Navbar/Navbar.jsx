import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.jpeg'
import { Link } from 'react-router-dom'


const Navbar =  ({ setShowLogin }) => {
  return (
    <>
        <div className='navbar'>
            <Link to="/"><img src={Logo} alt="" /></Link>
            <Link to="/Login"><p className='login'>Log in</p></Link>
        </div>
    </>
  );
};

export default Navbar
