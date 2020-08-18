import React from "react";
import TopPanel from "../TopPanel";
import './Header.css';
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header>
      <TopPanel/>
      <Navigation/>
    </header>
  )
};

export default Header;