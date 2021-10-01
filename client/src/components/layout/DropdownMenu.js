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
  let channels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  let channelList = [];
  channels.forEach((channel)=>{
    channelList.push( <DropdownItem key={channel} leftIcon={<BoltIcon />} link={`/graph/${channel}`} title={`Channel ${channel}`}/>)
  })

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
          <DropdownItem leftIcon="📖" title="Dissertation"/>
          <DropdownItem leftIcon="📈" rightIcon={<ChevronIcon />} goToMenu="graph" title="Graph" setActiveMenu={setActiveMenu}/>
          <DropdownItem leftIcon="🎖️" rightIcon={<ChevronIcon />} goToMenu="results" title="Results" setActiveMenu={setActiveMenu}/>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'graph'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} setActiveMenu={setActiveMenu}>
            Graph
          </DropdownItem>

          {channelList}
          
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
          <DropdownItem leftIcon="🔢" title="Classification"/>
        </div>
      </CSSTransition>

    </div>
  );
}

export default DropdownMenu;