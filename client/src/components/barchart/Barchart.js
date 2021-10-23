import React, { useState ,useEffect ,useContext } from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
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
        channel: i,
        sensor: el
      }
    });
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
      height={400}
      data={result}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 30,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="channel" padding={{ left: 10, right: 10 }} />
      <YAxis domain={[0, 255]}/>
      <Tooltip />
      <Legend verticalAlign="bottom" height={1}/>
      <Bar dataKey="sensor" fill="#8884d8" />
    </BarChart>
  )
}

export default Barchart;
