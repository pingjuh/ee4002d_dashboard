import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Channel from './components/channels/Channel';
import NotFound from './components/pages/NotFound';
import LineChart from './components/pages/LineChart';
import Alert from './components/layout/Alert';

import AlertState from './context/alert/AlertState'
import DataState from './context/data/DataState';

import './index.css';

const App = () => {
  return (
    <DataState>
      <AlertState>
        <Router>
          <Navbar/>
          <div className='container'>
            <Alert/>
            <Switch> 
              <Route exact path='/' component={Home} />
              <Route exact path='/linechart' component={LineChart} />
              <Route exact path="/channels/:channelID" component={Channel} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </DataState>
  );
}

export default App;