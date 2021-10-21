import React, { useContext } from 'react';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as BluetoothBlue } from '../../icons/bluetoothblue.svg';
import { ReactComponent as BluetoothRed } from '../../icons/bluetoothred.svg';
import SensorContext from '../../context/sensor/sensorContext';

const Navbar = () => {
  const { connected } = useContext(SensorContext);
  
  if (!connected) return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon="📊" link="/"/>
        <NavItem icon={<BluetoothRed />} link="connect" />
        <NavItem icon={<CaretIcon />} >
          <DropdownMenu/>
        </NavItem>
      </ul>
    </nav>
  )

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon="📊" link="/"/>
        <NavItem icon={<BluetoothBlue />} link="connect" />
        <NavItem icon={<CaretIcon />} >
          <DropdownMenu/>
        </NavItem>
      </ul>
    </nav>
  )
};

export default Navbar;
