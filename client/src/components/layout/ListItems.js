import * as React from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
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

