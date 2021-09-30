import React, { useState } from 'react';

const NavItem = ({ icon, link, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href={link} className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}

NavItem.defaultProps = {
  link: '#'
};


export default NavItem;


