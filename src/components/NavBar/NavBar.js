import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <div className='el-navbar'>
            <div className='el-toggleButton'>
                <button></button>
            </div>
            <div className='el-links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </div>
  )
}

export default NavBar;
