import React from 'react';
import classTags from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className = {classTags.nav}>
      <div className = {classTags.item}>
       <a href ="/Profile">Profile</a>
      </div>
      <div className = {classTags.item}>
       <a href = "/Dialogs">Messages</a>
      </div>
      <div className = {classTags.item}>
       <a href = "/News">News</a>
      </div>
      <div className = {classTags.item}>
       <a href = "/Music">Music</a>
      </div>
      <div className = {classTags.item}>
       <a href = "/Settings">Settings</a>
      </div>
    </nav>
    );
}

export default Navbar;