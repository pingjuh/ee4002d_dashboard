import React, { useContext, useEffect, useState} from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';
import DataContext from '../../context/data/dataContext';

const Graph = ({ channelID, width, height }) => {
  const alertContext = useContext(AlertContext);
  const dataContext = useContext(DataContext);
  const [data, setData] = useState([]);
  const [channel, setChannel] = useState();

  const channelData = dataContext.data[channelID];
  const channelDataObj = {'sensorsReading' : channelData};

  useEffect(() => {
    setData(prevData => [...prevData, channelDataObj]);
    if (channelID !== channel) setData(() => []);
    setChannel(() => channelID);
     // Moving effect
    while (data.length > 99) data.shift();
    // eslint-disable-next-line
  },[channelData]);

  // check if no data
  if (!dataContext.connected && !alertContext.alert) alertContext.setAlert('Disconnected', 'danger');

  return (
      <LineChart width={width} height={height} data={data}>
        <XAxis/>
        <YAxis/>
        <Line dataKey='sensorsReading' />
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