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
    width: 150 
  },
  {
    field: 'inserted',
    headerName: 'Time (hh:mm:ss:ms)',
    width: 150,
    editable: true,
  },
  {
    field: 'ch0',
    headerName: 'Ch0',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch1',
    headerName: 'Ch1',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch2',
    headerName: 'Ch2',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch3',
    headerName: 'Ch3',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch4',
    headerName: 'Ch4',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch5',
    headerName: 'Ch5',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch6',
    headerName: 'Ch6',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch7',
    headerName: 'Ch7',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch8',
    headerName: 'Ch8',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch9',
    headerName: 'Ch9',
    type: 'number',
    width: 55,
    editable: true,
  },
  {
    field: 'ch10',
    headerName: 'Ch10',
    type: 'number',
    width: 65,
    editable: true,
  },
  {
    field: 'ch11',
    headerName: 'Ch11',
    type: 'number',
    width: 65,
    editable: true,
  },
  {
    field: 'classification',
    headerName: 'Result',
    type: 'number',
    width: 70,
    editable: true,
  },
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
          item.ch0 = item.sensorsReading[0];
          item.ch1 = item.sensorsReading[1];
          item.ch2 = item.sensorsReading[2];
          item.ch3 = item.sensorsReading[3];
          item.ch4 = item.sensorsReading[4];
          item.ch5 = item.sensorsReading[5];
          item.ch6 = item.sensorsReading[6];
          item.ch7 = item.sensorsReading[7];
          item.ch8 = item.sensorsReading[8];
          item.ch9 = item.sensorsReading[9];
          item.ch10 = item.sensorsReading[10];
          item.ch11 = item.sensorsReading[11];
          item.classification = item.sensorsReading[12];
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