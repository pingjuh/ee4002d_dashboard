import React from 'react';
import Navbar from './components/layout/Navbar';
import Graph from './components/graphs/Graph';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

const App = () => (
  <Router>
    <Navbar/>
    <Graph/>
  </Router>
);

export default App;