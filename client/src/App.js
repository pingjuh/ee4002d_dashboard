import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Channel from './components/channels/Channel';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import Dashboard from './components/layout/Dashboard';
import Home from './components/pages/Home';
import AlertState from './context/alert/AlertState'
import SensorState from './context/sensor/SensorState';

import './index.css';

const App = () => {
  return (
    <SensorState>
      <AlertState>
        <Router>
          <Dashboard>
          <Alert/>
          <Switch> 
            <Route exact path='/' component={Home}/>
            <Route exact path="/channels/:channelID" component={Channel} />
            <Route component={NotFound} />
          </Switch>
          </Dashboard>
        </Router>
      </AlertState>
    </SensorState>
  );
}

export default App;