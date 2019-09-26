import React from 'react';
import classTags from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className = {classTags.nav}>
      <div className = {classTags.item}>
       <a>Profile</a>
      </div>
      <div className = {classTags.item}>
       <a>Messages</a>
      </div>
      <div className = {classTags.item}>
       <a>News</a>
      </div>
      <div className = {classTags.item}>
       <a>Music</a>
      </div>
      <div className = {classTags.item}>
       <a>Settings</a>
      </div>
    </nav>
    );
}

export default Navbar;