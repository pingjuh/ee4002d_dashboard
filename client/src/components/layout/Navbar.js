import React from 'react';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as Bluetooth } from '../../icons/bluetooth.svg';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <NavItem icon="📊" link="/"/>
      <NavItem icon={<Bluetooth />} link="connect" />
      <NavItem icon={<CaretIcon />} >
        <DropdownMenu/>
      </NavItem>
    </ul>
  </nav>
);

export default Navbar;
