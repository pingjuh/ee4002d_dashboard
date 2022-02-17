import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';

const columns = [
  { field: 'id',
    headerName: 'ID', 
    width: 300 
  },
  {
    field: 'inserted',
    headerName: 'Time (hh:mm:ss:ms)',
    width: 300,
    editable: true,
  },
  {
    field: 'sensorsReading',
    headerName: 'Readings',
    type: 'number',
    width: 300,
    editable: true,
  }
];

export default function History() {
 
  const [data, setData] = useState([]);

  const getData = (number) => {
    axios.get(`http://localhost:5000/api/sensor/${number}`)
      .then(res => {
        res.data.map(item => {
          // convert time from UTC to local time
          let time = (parseInt(item.inserted.slice(11,13)) + 8) % 24;
          item.inserted = time.toString() + ':' + item.inserted.slice(14, 22);
          return null;
        })
        setData(res.data);
      })  
  }  

  useEffect(() => {
    getData(10);
  }, []);

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
              height: 700
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
            <Button 
              onClick={() => {
                getData(Number.MAX_SAFE_INTEGER);

              }}
            >
              All
            </Button>
          </ButtonGroup>     
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
          />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </>
  )
}