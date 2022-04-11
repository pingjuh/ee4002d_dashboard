import React, { useState ,useEffect ,useContext } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid
} from 'recharts';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../spinner/Spinner';

const Barchart = () => {
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState();
  let sensor0, sensors, resultObj;

  if (connected) {
    sensor0 = data["sensorsReading"][0];
    sensors = data["sensorsReading"];
    const max = 170;
    resultObj = [
      {channel:'V1', Channels:max-sensors[0]},
      {channel:'V2', Channels:max-sensors[1]},
      {channel:'V3', Channels:max-sensors[2]},
      {channel:'V4', Channels:max-sensors[3]},
      {channel:'V5', Channels:max-sensors[4]},
      {channel:'H1', Channels:max-sensors[5]},
      {channel:'H2', Channels:max-sensors[6]},
      {channel:'H3', Channels:max-sensors[7]},
      {channel:'H4', Channels:max-sensors[8]},
      {channel:'H5', Channels:max-sensors[9]},
      {channel:'H6', Channels:max-sensors[10]},
      {channel:'H7', Channels:max-sensors[11]},
    ];
    // console.log(resultObj);
  }

  useEffect(() => {
    setResult(prevResult => resultObj);
    return () => {
    }
    // eslint-disable-next-line
  },[sensor0, connected]);
  
  if (!connected) return <Spinner/>;

  return (
    <BarChart
      width={1000}
      height={200}
      data={result}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 10,
      }}
      >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="channel" padding={{ left: 0, right: 0 }} />
      <YAxis domain={[0, 170]} axisLine={true} tick={true}/>
      <Bar dataKey="Channels" fill="#128FD9"/>
    </BarChart>
  )
}

export default Barchart;