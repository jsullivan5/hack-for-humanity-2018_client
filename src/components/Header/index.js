import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header className="header-main">
    <h1 className="logo">
      <span className="accent-teal">re</span>
      <span className="main-color">Parent</span>
    </h1>
    <nav>
      <NavLink activeClassName="nav-link-selected" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="nav-link-selected" to="/mentoring">
        Mentoring
      </NavLink>
      <NavLink activeClassName="nav-link-selected" to="/volunteer">
        Volunteering
      </NavLink>
      <NavLink activeClassName="nav-link-selected" to="/donate">
        Donate
      </NavLink>
      <NavLink activeClassName="nav-link-selected" to="/about">
        About Us
      </NavLink>
    </nav>
  </header>
);

export default Header;
