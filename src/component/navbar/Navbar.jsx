import React from "react";
import "./navbar.css";
import { ReactComponent as SearchLOGO } from "../assets/search.svg";
import { ReactComponent as HeartLogo } from "../assets/heart.svg";
import { ReactComponent as BagLogo } from "../assets/profile.svg";
import { ReactComponent as ProfileLogo } from "../assets/shopping-bag.svg";
import { ReactComponent as EngLogo } from "../assets/ENG.svg";
import { ReactComponent as VectorLogo } from "../assets/Vector.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="header">
        <VectorLogo />
        <h1>LOGO</h1>
        <div className="logo-container">
          <SearchLOGO />
          <HeartLogo />
          <BagLogo />
          <ProfileLogo />
          <EngLogo />
        </div>
      </div>

      <ul className="header-list">
        <li>Shop</li>
        <li>Skills</li>
        <li>Stories</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
