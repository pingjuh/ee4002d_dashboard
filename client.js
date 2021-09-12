import io from 'socket.io-client';
// const io = require('socket.io-client');
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import {
  Line,
  LineChart,
  XAxis,
  YAxis
} from 'recharts';

const PORT = process.env.PORT || 5000;

const socket = io(`http://localhost:${PORT}`, {
  transports: ['websocket', 'polling']
});

const App = ({ }) => {
  const [data, setData] = useState([]);

  // Listen for a sensor event and update the state
  useEffect(() => {
    socket.on('sensor', y => {
      setData(currentData => [...currentData, y]);
    });
  }, []);

  // Render the line chart using the state
  return (
    <div>
      <h1>Sensor reading</h1>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="sensorReading" />
      </LineChart>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
