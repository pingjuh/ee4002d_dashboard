import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownItem from './DropdownItem';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';


const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  
  // Generate 16 channels
  let channelIDs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let dropDownItemList = channelIDs.map(channelID => <DropdownItem key={channelID} leftIcon={<BoltIcon />} link={`/channels/${channelID}`} title={`Channel ${channelID}`}/> );


  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, [])

  const calcHeight = el => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={400}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon="📖" title="Dissertation" link={'/dissertation'}/>
          <DropdownItem leftIcon="📺" rightIcon={<ChevronIcon />} goToMenu="channels" title="Channels" setActiveMenu={setActiveMenu}/>
          <DropdownItem leftIcon="🎖️" rightIcon={<ChevronIcon />} goToMenu="results" title="Results" setActiveMenu={setActiveMenu}/>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'channels'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} setActiveMenu={setActiveMenu}>
            Channel
          </DropdownItem>

          {dropDownItemList}
          
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'results'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} setActiveMenu={setActiveMenu}>
            Results
          </DropdownItem>
          <DropdownItem leftIcon="🔢" title="Classification" link={'/classification'}/>
        </div>
      </CSSTransition>

    </div>
  );
}

export default DropdownMenu;