import React from 'react';
import menuImgWhite from './wmenu.png'
import menuImg from './menu.png'
import './style.css';

const Hamburger = ({ white }) => (
  <img src={white ? menuImgWhite : menuImg} alt="Open the Menu" className="hamburger--root"/>
);

export default Hamburger;
