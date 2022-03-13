import React from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory, useLocation } from 'react-router-dom';
import Board from '../board/Board';
import Status from '../status/Status';

const useStyles = makeStyles({
  active : {
    backgroundColor: '#e0e0e0',
  }
});

export default function MainListItems() {
  const history = useHistory();
  const location = useLocation(); 
  const classes = useStyles();

  return (
    <List>
       <ListItem 
        button
        onClick={() => history.push('/about')}
        className={location.pathname === '/about' ? classes.active : ''}
      >
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>

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
        onClick={() => history.push('/history')}
        className={location.pathname === '/history' ? classes.active : ''}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Past Results" />
      </ListItem> 
      <ListItem style={{ justifyContent:'center' }}>
         <Status/>
      </ListItem>
      <ListItem>
        <Board />
      </ListItem>
    </List>
  )
}

