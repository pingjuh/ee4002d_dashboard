import React, { useContext, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../layout/Spinner';

const Graph = ({ channelID, width, height }) => {
  const { setAlert, removeAlert } = useContext(AlertContext);
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState([]);
  const [channel, setChannel] = useState();
  let sensor, time, resultObj;

  if (connected) {
    sensor = data["sensorsReading"][channelID];
    time = data["inserted"].slice(14,22) // min:sec:millisec
    resultObj = {
      sensor,
      time
    }
  }

  useEffect(() => {
    connected ? setAlert('Connected', 'success') : setAlert('Disconnected', 'danger');
    setResult(prevResult => [...prevResult, resultObj]);
    if (channelID !== channel) setResult(() => []);
    setChannel(() => channelID);
     // Moving effect
    while (result.length > 99) result.shift();
  
    return () => {
      removeAlert();
    }
    // eslint-disable-next-line
  },[sensor, connected]);

  if (!connected) return <Spinner/>;

  return (
    <LineChart 
      width={width}
      height={height} 
      data={result}
      margin={{
        top: 0,
        right: 10,
        left: 0,
        bottom: 10,
      }}
    >
      <XAxis interval={44} dataKey='time' />
      <YAxis domain={[0, 255]}/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="bottom" height={1} />
      <Line
        type="monotone"
        dataKey="sensor"
        stroke="#A9A9A9"
        // activeDot={{ r: 8 }}
      />
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