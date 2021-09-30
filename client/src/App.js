import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Channel0 from './components/channels/Channel0';
import Channel1 from './components/channels/Channel1';
import Channel2 from './components/channels/Channel2';
import Channel3 from './components/channels/Channel3';
import Channel4 from './components/channels/Channel4';
import Channel5 from './components/channels/Channel5';
import Channel6 from './components/channels/Channel6';
import Channel7 from './components/channels/Channel7';
import Channel8 from './components/channels/Channel8';
import Channel9 from './components/channels/Channel9';
import Channel10 from './components/channels/Channel10';
import Channel11 from './components/channels/Channel11';
import Channel12 from './components/channels/Channel12';
import Channel13 from './components/channels/Channel13';
import Channel14 from './components/channels/Channel14';
import Channel15 from './components/channels/Channel15';
import NotFound from './components/pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

const App = () => (
  <Router>
    <Navbar/>
    <div className='container'>
      <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path='/graph/ch0' component={Channel0} />
        <Route exact path='/graph/ch1' component={Channel1} />
        <Route exact path='/graph/ch2' component={Channel2} />
        <Route exact path='/graph/ch3' component={Channel3} />
        <Route exact path='/graph/ch4' component={Channel4} />
        <Route exact path='/graph/ch5' component={Channel5} />
        <Route exact path='/graph/ch6' component={Channel6} />
        <Route exact path='/graph/ch7' component={Channel7} />
        <Route exact path='/graph/ch8' component={Channel8} />
        <Route exact path='/graph/ch9' component={Channel9} />
        <Route exact path='/graph/ch10' component={Channel10} />
        <Route exact path='/graph/ch11' component={Channel11} />
        <Route exact path='/graph/ch12' component={Channel12} />
        <Route exact path='/graph/ch13' component={Channel13} />
        <Route exact path='/graph/ch14' component={Channel14} />
        <Route exact path='/graph/ch15' component={Channel15} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;