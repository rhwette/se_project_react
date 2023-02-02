import React from 'react';
import './Footer.css';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name"> Developed by Practicum student - rhw</p>
      <p className="footer-date"> {year}</p>
    </footer>
  );
}

export default Footer;
