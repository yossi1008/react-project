import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  );
}

export default Header;
