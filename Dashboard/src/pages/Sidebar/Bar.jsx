import "./Sidebar.css";
import React, { useState } from 'react';
import logo from "../../Assests/Logo.png";
import { useHistory } from "react-router-dom";
import home from "../../Assests/home-sharp.svg";
import customers from "../../Assests/customers.png";
import profile from "../../Assests/user.png";
import blog from "../../Assests/blog.png";


const Bar = () => {

  const history = useHistory();

  const navigateToHome = () => {
    history.push("/");
  }
  const navigateToUsers = () => {
    history.push("/users");
  }
  
  const navigateToPosts = () => {
    history.push("/posts");
  }

  const navigateToTables = () => {
    history.push("/updateuser");
  }

  
  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Code Worker</h1>
        </div>     
      </div>

      <div className="sidebar__menu">
      <div className="sidebar__link">
        <img width="25" src={home} alt="Home"/>
          <button onClick={navigateToHome}>Home</button> 
      </div>
        <div className="sidebar__link">
        <img width="25" src={customers} alt="customer"/>
            <button onClick={navigateToUsers}>Add Customers</button> 
        </div>
        <div className="sidebar__link">
        <img width="25" src={blog} alt="blog"/>
            <button onClick={navigateToPosts}>Blog Posts</button> 
        </div>
        <div className="sidebar__link">
        <img width="25" src={profile} alt="profile"/>
            <button onClick={navigateToTables}>User Profile</button> 
        </div>
       </div>
    </div>
  );
};

export default Bar;