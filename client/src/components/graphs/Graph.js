import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';


const Graph = ({ channelID, width, height }) => {
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
    return () => {
      socket.disconnect();
    }
  }, []);

  // Transform data from of type [...{sensorsReading: Array(16)}] to channelData of type [....{sensorsReading: number}] 

  let channelData = [];
  try {
    data.forEach(element => {
      channelData.push({'sensorsReading':element["sensorsReading"][channelID]})
    })
  } catch (error) {
    console.log(error);
  }

  return (
      <LineChart width={width} height={height} data={channelData}>
        <XAxis/>
        <YAxis/>
        <Line dataKey="sensorsReading" />
      </LineChart>
  );
}

Graph.defaultProps = {
  width: 500,
  height: 300
}

Graph.propTypes = {
  channelID : PropTypes.number.isRequired
};

export default Graph;