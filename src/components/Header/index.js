import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import './Header.css';

const Header = () => (
  <AppBar>
    <Typography variant="title" color="inherit" className="menu-button">
      <NavLink
        activeClassName="nav-link-selected"
        exact
        to="/"
      >
          Home
      </NavLink>
    </Typography>

    <Typography variant="title" color="inherit" className="menu-button">
      <NavLink
        activeClassName="nav-link-selected"
        to="/about"
      >
          About
      </NavLink>
    </Typography>

    <Typography variant="title" color="inherit" className="menu-button">
      <NavLink
        activeClassName="nav-link-selected"
        to="/pen-pal"
      >
          Pen Pal
      </NavLink>
    </Typography>
  </AppBar>
);

export default Header;
