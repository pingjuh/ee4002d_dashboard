import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Graph from '../graph/Graph';
import Toolbar from '@mui/material/Toolbar';

export default function Home() {
  // const channelID = [{id: 0},{id: 1},{id: 2},{id: 3}, {id: 4},{id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}];
  return (
    <Toolbar>   
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Graph channelID={0}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={1}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={2}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={3}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={4}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={5}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={6}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={7}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={8}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={9}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={10}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Graph channelID={11}/>
            </Paper>
          </Grid>          
        </Grid>
      </Container>
    </Toolbar>
  )
}