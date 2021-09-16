import './index.css';
import io from 'socket.io-client';
import {
  Line,
  LineChart,
  XAxis,
  YAxis
} from 'recharts';

import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState, useEffect, useRef, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';


function App() {
  
  return (
    <Fragment>
      <Navbar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
        <Graph></Graph>
    </Fragment>
  );
}

function Graph(props) {
  const PORT = process.env.PORT || 5000;
  const socket = io(`http://localhost:${PORT}`, {transports: ['websocket', 'polling']});
  const [data, setData] = useState([]);
  // Listen for a sensor event and update the state
  useEffect(() => {
    socket.on('sensor', newData => {
      setData(previousData => {
        const data = [...previousData, newData];
        // Moving effect
        if (data.length === 100) data.shift();
        return data;
      })
    });
  }, []);
  return (
    <Fragment>
      <h1>Sensor reading: Channel 1</h1>
      <LineChart width={1000} height={600} data={data}>
        <XAxis dataKey="time" />
        <YAxis/>
        <Line dataKey="sensorReading" />
      </LineChart>
    </Fragment>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
            leftIcon="📖">
            Dissertation
          </DropdownItem>
          <DropdownItem
            leftIcon="📈"
            rightIcon={<ChevronIcon />}
            goToMenu="graph">
            Graph
          </DropdownItem>
          <DropdownItem
            leftIcon="🎖️"
            rightIcon={<ChevronIcon />}
            goToMenu="results">
            Results
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'graph'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Graph</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 0</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 1</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 2</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 3</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 4</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 5</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 6</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 7</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 8</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 9</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 10</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 11</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 12</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 13</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 14</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Channel 15</DropdownItem>

        
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'results'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Results</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🔢">Classification</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;