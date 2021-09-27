import React, { useState, useEffect, Fragment } from 'react';
import io from 'socket.io-client';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Graph = () => {
  const [data, setData] = useState([]);
  // Listen for a sensor event and update the state
  useEffect(() => {
    const PORT = process.env.PORT || 5000;
    const socket = io(`http://localhost:${PORT}`, { transports: ['websocket', 'polling'] });
    socket.on('sensor', newData => {
      setData(previousData => {
        const data = [...previousData, newData];
        // Moving effect
        if (data.length === 100) data.shift();
        return data;
      })
    });
  }, []);
  return (
    <Fragment>
      <h1>Sensor reading: Channel 1</h1>
      <LineChart width={1000} height={600} data={data}>
        <XAxis dataKey="time" />
        <YAxis/>
        <Line dataKey="sensorReading" />
      </LineChart>
    </Fragment>
  );
}


export default Graph;