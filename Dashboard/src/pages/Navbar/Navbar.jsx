import React from "react";
import "./Navbar.css";


const Navbar = () => {
    
  return (
      <>
    <nav className="navbar">
      <div className="nav_icon">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        
      </div>
      <div className="navbar__right">
      <div class="dropdown">
       <button class="dropbtn">Setting</button>
      <div class="dropdown-content">
        <a href="#">Profile</a>
        <a href="#">Edit Profile</a>
        <a href="#">Files</a>
        <a href="#">Transactions</a>
        <a href="#">Log Out</a>
      </div>
     </div>
    </div>
   </nav>
    </>
  );
};

export default Navbar;