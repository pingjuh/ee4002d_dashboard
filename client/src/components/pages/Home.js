import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Title from '../layout/Title';
import Barchart from '../barchart/Barchart';
import Heatmap from '../heatmap/Heatmap';
import Result from '../result/Result';
import axios from 'axios';
import heatmapLegend from '../heatmap/heatmapLegend.png';

export default function Home() {
  const getAndPost = async () => {
    const res  = await axios.get('/api/sensor/100');
    res.data.map(item => {
        axios.post('/api/sensor', item);
    });
  }

  return (
    <>
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Classification Result */}
          <Grid 
            item lg={4}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 280,
                width: 280,
              }}
            >
              <Title> Classification Result </Title>
              <Result />
            </Paper>
          </Grid>
          
          {/* Heatmap Legend */}
          <Grid 
            item lg={4}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <img src={heatmapLegend} style={{ width: '30px', height: '352px', margin: 'auto', display: 'block' }} /> 
          </Grid>

          {/* Heatmap */}
          <Grid 
            item lg={4}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 280,
                width: 280,
              }}
            >
              <Title> Smart Sensor Display </Title>
              <Heatmap/>
            </Paper>
          </Grid>

          {/* Barchart */}
          <Grid item lg={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: 1150,
                height: 280
              }}
            >
              <Title> Channels </Title>
              <Button
                onClick={() => {
                  getAndPost();
              }}> 
                Play demo 
              </Button>
              <Barchart />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}