import React from "react";

import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <h1>Welcome Talaia,</h1>
      <div className="right">
        <div>
          <i className="fa fa-search"></i>
          <input type="search" placeholder="search"></input>
        </div>
        <i className="fa fa-bell fa-2x"></i>
        <span>1</span>
        <i className="fa fa-envelope fa-2x"></i>
        <span>5</span>
        <div className="img"></div>
      </div>
    </nav>
  );
};

export default Navbar;
