import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MultiGraph from '../graph/MultiGraph';
import Barchart from '../barchart/Barchart';
import Toolbar from '@mui/material/Toolbar';

export default function Home() {
  return (
    <Toolbar>   
      <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
        <MultiGraph />
        <Barchart />
      </Container>
    </Toolbar>
  )
}