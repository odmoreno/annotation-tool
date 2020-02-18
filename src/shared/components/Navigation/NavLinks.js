import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>TEST 1</NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">TEST 2</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">TEST 3</NavLink>
    </li>
    <li>
      <NavLink to="/d3">D3 examples</NavLink>
    </li>
  </ul>
};

export default NavLinks;