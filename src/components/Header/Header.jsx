import React from 'react';
import classTags from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
    <header className = {classTags.header}>
    <img src = 'https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/logo-maker-landing-page-v2/Esport-logo-maker-min.png'></img>
    <div className = {classTags.loginBlock}>
      {props.isAuth 
      ? <div> {props.login} - <button onClick = {props.logout}>Log out</button></div>  
      : <NavLink to = '/Login'>Login</NavLink> }
    </div>
  </header>
    );
}

export default Header;