import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav id="navbar">
      <div className="brand">
        <div id="app-logo" />
        <h1 className="app-name">CoinTracker</h1>
      </div>

      <ul id="nav-links">
        <li>
          <NavLink to="/" id="home">
            {location.pathname === '/' ? 'Coins' : 'Back'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
