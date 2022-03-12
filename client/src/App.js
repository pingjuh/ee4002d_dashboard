import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Dashboard from './components/layout/Dashboard';
import Home from './components/pages/Home';
import Graph from './components/pages/Graph';
import History from './components/pages/History';
import About from './components/pages/About';
import SensorState from './context/sensor/SensorState';
import HeatmapState from './context/heatmap/HeatmapState';

const App = () => {
  return (
    <HeatmapState>
      <SensorState>
        <Router>
          <Dashboard>
          <Switch> 
            <Route exact path='/' component={Home}/>
            <Route exact path='/graph' component={Graph}/>
            <Route exact path='/history' component={History}/>
            <Route exact path = '/about' component={About}/>      
            <Route component={NotFound} />
          </Switch>
          </Dashboard>
        </Router>
      </SensorState>
    </HeatmapState>
  );
}

export default App;