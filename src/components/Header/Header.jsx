import React from 'react';
import classTags from './Header.module.css';

const Header = () => {
    return (
    <header className = {classTags.header}>
    <img src = 'https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/logo-maker-landing-page-v2/Esport-logo-maker-min.png'></img>
  </header>
    );
}

export default Header;