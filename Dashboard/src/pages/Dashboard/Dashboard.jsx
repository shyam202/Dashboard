import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  
  } from '@ionic/react';
import { logDOM } from '@testing-library/dom';
import React, { useState } from 'react';
import './Dashboard.css';
import { BrowserRouter as Switch, Route, Router, NavLink, useLocation } from 'react-router-dom';
import Bar from "../Sidebar/Bar";
import Main from "../Main/Main";
import Users from "../Users/Users";
import Navbar from "../Navbar/Navbar";
import Posts from "../Post/Posts";
import UserUpdate from "../UserUpdate/UserUpdate";

const Dashboard  = () => {

    const location = useLocation();

  return (
       <>   
            <div className="container">
            <Navbar />
            <Bar />
            <Switch location={location} key={location.pathname}>
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/" component={Main} />
            <Route path="/updateuser" component={UserUpdate} />
          </Switch>
          </div>

      </>
  );
};

export default Dashboard;
