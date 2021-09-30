import React from 'react';
import { Link } from 'react-router-dom';


const DropdownItem = ({ goToMenu, leftIcon, rightIcon, title, link, setActiveMenu, children }) => {
  return (
    <Link to={link} className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
      <span className="icon-button">{leftIcon}</span>
        <h2>{children}</h2>
        {title}
      <span className="icon-right">{rightIcon}</span>
    </Link>
  );
}


DropdownItem.defaultProps = {
  link: '#'
};

export default DropdownItem;
