import React from 'react';
import NavItem from './NavItem';


const Navigation = (props) => (
  <nav class="main-nav">
    <ul>
      <NavItem />
      <li><a href='#'>Cats</a></li>
      <li><a href='#'>Dogs</a></li>
      <li><a href='#'>Computers</a></li>
    </ul>
  </nav>
);

export default Navigation;
