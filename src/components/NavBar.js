// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h1>Muscles World</h1>
      <h2>Make yourself proud</h2>
      <nav aria-label="Main Navigation" role="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exercise">Exercises</Link></li>
          <li><Link to="/nutrients">Nutrients</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/stocks">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
