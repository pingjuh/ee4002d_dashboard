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
  const sensorContext = useContext(SensorContext);
  const [data, setData] = useState([]);
  const [channel, setChannel] = useState();

  const channelData = sensorContext.data[channelID];
  const channelDataObj = {'sensorsReading' : channelData};

  useEffect(() => {
    setData(prevData => [...prevData, channelDataObj]);
    if (channelID !== channel) setData(() => []);
    setChannel(() => channelID);
     // Moving effect
    while (data.length > 99) data.shift();
     // check for connection
    if (sensorContext.connected) setAlert('Connected', 'success');
    else  setAlert('Disconnected', 'danger');
    
    return () => {
      removeAlert();
    }
    // eslint-disable-next-line
  },[channelData, sensorContext.connected]);

  if (!sensorContext.connected) return <Spinner/>;


  return (
      <LineChart 
        width={width}
        height={height} 
        data={data}
        margin={{
          top: 0,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <XAxis interval={9} />
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" height={1} />
        <Line
              type="monotone"
              dataKey="sensorsReading"
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