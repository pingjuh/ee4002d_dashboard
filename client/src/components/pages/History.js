import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';


export default function History() {
  // import data from mongodb using axios
  const [data, setData] = React.useState([]);

  const getData = (number) => {
    axios.get(`http://localhost:5000/api/sensor/${number}`)
      .then(res => {
        setData(res.data);
      })
  }  

  return (
    <>
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              width: 1250,
              height: 5000
            }}
          >
          <ButtonGroup 
            variant="contained" 
            size="large"
            sx={{
              boxShadow: 5,
              borderRadius: 10
            }}
          >
            <Button 
              sx={{ marginLeft: '450px'
              }}
              onClick={() => {
                getData(10);
              }}
            >
              10
            </Button>
            <Button 
              onClick={() => {
                getData(50);
              }}
            >
              50
            </Button>
            <Button 
              onClick={() => {
                getData(100);
              }}
            >
              100
            </Button>
          </ButtonGroup>         
          <ul>
            <ListSubheader>{"Time"}</ListSubheader>
            {data.map(item => (
              <ListItem key={item._id}>
                <ListItemText primary={` ${item.inserted.slice(14, 23)}`}/>
                <ListItemText primary={` ${item.sensorsReading}`}/>
              </ListItem>
            ))}
          </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </>
  )
}
