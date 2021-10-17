import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';

const Graph = ({ channelID, width, height }) => {
  const [data, setData] = useState([]);
  const alertContext = useContext(AlertContext);
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

  // check if no data
  if (!channelData.length && alertContext.alert === null) alertContext.setAlert('No data', 'danger');
  
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