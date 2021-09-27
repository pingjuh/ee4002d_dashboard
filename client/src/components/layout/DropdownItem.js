import React from 'react';

const DropdownItem = ({ goToMenu, leftIcon, rightIcon, title, setActiveMenu, children }) => {
  return (
    <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
      <span className="icon-button">{leftIcon}</span>
        <h2>{children}</h2>
        {title}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
}

export default DropdownItem;
