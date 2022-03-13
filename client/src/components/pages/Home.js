import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Title from '../layout/Title';
import MultiGraph from '../graph/MultiGraph';
import Barchart from '../barchart/Barchart';
import Heatmap from '../heatmap/Heatmap';
import Result from '../result/Result';
import Instructions from '../instructions/Instructions';
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
          {/* Classification Result */}
          <Grid 
            item lg={3}
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

          {/* Heatmap */}
          <Grid 
            item lg={3}
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
              <Title> Channels Intersection </Title>
              <Heatmap/>
            </Paper>
          </Grid>

          {/* Barchart */}
          <Grid item lg={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: 560,
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

        {/* Instructions */}
        </Grid>
        <Grid 
          item lg={6}
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            height: 280,
            width: 600,
          }}
        >
          <Instructions/>
        </Grid>
      </Container>
    </>
  )
}