import React, { useState ,useEffect ,useContext } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../layout/Spinner';

const Barchart = () => {
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState();
  let sensor0, sensors, resultObj;

  if (connected) {
    sensor0 = data["sensorsReading"][0];
    sensors = data["sensorsReading"];
    resultObj = sensors.map((el, i) => {
      return {
        channel: i+1,
        Channels: el
      }
    });
    // remove last element (result) of resultObj
    resultObj.pop();
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
      width={1200}
      height={400}
      data={result}
      margin={{
        top: 0,
        right: 10,
        left: 0,
        bottom: 100,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="channel" padding={{ left: 10, right: 10 }} />
      <YAxis domain={[0, 170]}/>
      <Tooltip />
      <Legend verticalAlign="bottom" height={1}/>
      <Bar dataKey="Channels" fill="#128FD9" />
    </BarChart>
  )
}

export default Barchart;