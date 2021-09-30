import React from 'react';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <NavItem icon="🏠" link="/"/>
      <NavItem icon={<PlusIcon />} link="connect" />
      <NavItem icon={<CaretIcon />} >
        <DropdownMenu/>
      </NavItem>
    </ul>
  </nav>
);

export default Navbar;
