import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Channel from './components/channels/Channel';
import NotFound from './components/pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Switch> 
          <Route exact path='/' component={Home} />
          <Route exact path="/graph/:channelID" component={Channel} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;