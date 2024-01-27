import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>Country API Tool</span>
        <div className='nav-links'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/newsletter'>
            NewsLetter
          </NavLink>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
