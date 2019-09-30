import React from 'react';
import classTags from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className = {classTags.nav}>
      <div className = {classTags.item}>
       <NavLink to ="/Profile" activeClassName = {classTags.activeLink}>Profile</NavLink>
      </div>
      <div className = {classTags.item}>
       <NavLink to  = "/Dialogs" activeClassName = {classTags.activeLink}>Messages</NavLink>
      </div>
      <div className = {classTags.item}>
       <NavLink to = "/News" activeClassName = {classTags.activeLink}>News</NavLink>
      </div>
      <div className = {classTags.item}>
       <NavLink to = "/Music" activeClassName = {classTags.activeLink}>Music</NavLink>
      </div>
      <div className = {classTags.item}>
       <NavLink to = "/Settings" activeClassName = {classTags.activeLink}>Settings</NavLink>
      </div>
    </nav>
    );
}

export default Navbar;