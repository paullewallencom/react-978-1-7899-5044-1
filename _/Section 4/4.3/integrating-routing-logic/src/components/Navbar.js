import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |
    <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
  </div>
);

export default NavBar;
