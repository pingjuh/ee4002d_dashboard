import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import Dashboard from './components/layout/Dashboard';
import Home from './components/pages/Home';
import Graph from './components/pages/Graph';
import AlertState from './context/alert/AlertState'
import SensorState from './context/sensor/SensorState';

const App = () => {
  return (
    <SensorState>
      <AlertState>
        <Router>
          <Dashboard>
          <Alert/>
          <Switch> 
            <Route exact path='/' component={Home}/>
            <Route exact path='/graph' component={Graph}/>
            <Route component={NotFound} />
          </Switch>
          </Dashboard>
        </Router>
      </AlertState>
    </SensorState>
  );
}

export default App;