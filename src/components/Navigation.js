import React from 'react';
import NavItem from './NavItem';


const Navigation = (props) => (
  <nav className="main-nav">
    <ul>
      <NavItem url="/react-flickr-gallery/cats" name="cats"/>
      <NavItem url="/react-flickr-gallery/dogs" name="dogs"/>
      <NavItem url="/react-flickr-gallery/computers" name="computers" />
    </ul>
  </nav>
);

export default Navigation;
