import React, { useContext } from 'react'
import BluetoothDisabledIcon from '@mui/icons-material/BluetoothDisabled';
import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';
import sensorContext from '../../context/sensor/sensorContext'

const Status = () => {
  const { connected } = useContext(sensorContext)
  if (connected) return (
    <BluetoothConnectedIcon fontSize="large" color="primary"/>
  );
  else return (
    <BluetoothDisabledIcon fontSize="large" color="primary"/>
  );
}

export default Status;