import * as React from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  active : {
    backgroundColor: '#e0e0e0',
  }
});

export default function MainListItems() {
  const history = useHistory();
  const location = useLocation(); 
  const classes = useStyles();

  function getDeviceInfo() {
    let options = {
      acceptAllDevices: true,
    }

    console.log('Requesting Bluetooth Device...')
    navigator.bluetooth.requestDevice(options).then(device => {
      console.log('> Name: ' + device.name)
    }).catch(error => {
      console.log('Argh! ' + error)
    })
  }

  return (
    <List>
      <ListItem 
        button
        onClick={() => history.push('/')}
        className={location.pathname === '/' ? classes.active : ''}
      >
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      
      <ListItem 
        button
        onClick={() => history.push('/graph')}  
        className={location.pathname === '/graph' ? classes.active : ''}
      >
        <ListItemIcon>
          <AutoGraphIcon />
        </ListItemIcon>
        <ListItemText primary="Graphs" />
      </ListItem>

      <ListItem 
        button
        onClick={()=> {
          getDeviceInfo()
        }}  
      >
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText primary="Connect" />
      </ListItem>
      
    </List>
  )
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Past Results" />
    </ListItem>
  </div>
);

