import React from "react";
import "./navbar.scss";
import { useState } from "react";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    console.log(window.pageYOffset);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
            alt=""
          ></img> 
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <i className="bi bi-search icon"></i>
          <span>KID</span>
          <i className="bi bi-bell-fill icon"></i>
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gji_wB4Swi7efLPSuAvVUERZmv5RwN9t_vzjr8llg=s360-p-rw-no"
            alt=""
          ></img>
          <div className="profile">
            <i className="bi bi-caret-down-fill icon"></i>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
