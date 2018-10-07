import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <nav className="header-main">
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
);

export default Header;
