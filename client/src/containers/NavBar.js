import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavLink
        to="/"
        exact
      >Home</NavLink>
      <NavLink
        to="/foundpets"
        exact
      >Found Pets</NavLink>
      <NavLink
        to="/foundpetsnew"
        exact
      >New Found Pet</NavLink>
      <NavLink
        to="/lostpets"
        exact
      >Lost Pets</NavLink>
      <NavLink
        to="/lostpetsnew"
        exact
      >New Lost Pets</NavLink>
      <NavLink
        to="/about"
        exact
      >About Us</NavLink>
    </Navbar>
  );
};

export default NavBar;
