import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Title from '../layout/Title';
import MultiGraph from '../graph/MultiGraph';
import Barchart from '../barchart/Barchart';
import Heatmap from '../heatmap/Heatmap';
import Result from '../result/Result';
import Button from '@mui/material/Button';
import axios from 'axios';

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
          {/* Multigraph */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: 1250,
                height: 430
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
          
           {/* Result */}
           <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 265,
                width: 265,
              }}
            >
              <Title> Classification Result </Title>
              <Result />
            </Paper>
          </Grid>

          {/* Heatmap */}
          <Grid item xs={12} md={8} lg={4.5}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 410,
                width: 410,
              }}
            >
              <Title> Channels Intersection </Title>
              <Heatmap/>
            </Paper>
          </Grid>

           {/* Multigraph */}
           <Grid item xs={12} md={8} lg={4.5}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 410,
                width: 515,
              }}
            >
              <Title> Channels Time Plot </Title>
              <MultiGraph />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}