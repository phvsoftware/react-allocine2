import React from "react";
import "./Header.css";
import logo from "../images/allocine-title.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Allociné" className="logo-title"></img>
    </header>
  );
};

export default Header;
