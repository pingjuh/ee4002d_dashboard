import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Channels from './components/channels/Channels';
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

          <Channels/>

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;