import React from "react";
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-15">
      <NavLink to="/" className={({isActive} => {}</header>)}>Home</NavLink>
      <NavLink to="/Movies" >Movies</NavLink>
    </header>
  );
};

export default Header;
