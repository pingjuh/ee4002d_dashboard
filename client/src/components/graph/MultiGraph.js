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
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../spinner/Spinner';

export default function MultiGraph () {
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState([]);
  let time, sensor0, sensors, resultObj;

  if (connected) {
    sensor0 = data["sensorsReading"][0];
    sensors = data["sensorsReading"];
    time = data["inserted"].slice(14,22) // min:sec:millisec
    const max = 170;
    resultObj = {
      ch0: max - sensors[0],
      ch1: max - sensors[1],
      ch2: max - sensors[2],
      ch3: max -sensors[3],
      ch4: max - sensors[4],
      ch5: max - sensors[5],
      ch6: max - sensors[6],
      ch7: max - sensors[7],
      ch8: max - sensors[8],
      ch9: max - sensors[9],
      ch10: max - sensors[10],
      ch11: max - sensors[11],
      time
    }
  }
  useEffect(() => {
    setResult(prevResult => [...prevResult, resultObj]);
     // Moving effect
    while (result.length > 16) result.shift();
    // eslint-disable-next-line
  },[sensor0]);

  if (!connected || !result) return <Spinner/>;

  return (
    <>
      <LineChart 
        width={480}
        height={400} 
        data={result}
        margin={{
          top: 0,
          right: 10,
          left: 0,
          bottom: 100,
        }}
      >
        <XAxis interval={5} dataKey='time' />
        <YAxis domain={[0, 170]}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" height={1} />
        <Line type="monotone" dataKey="ch0" stroke="#e60049"/>
        <Line type="monotone" dataKey="ch1" stroke="#0bb4ff"/>
        <Line type="monotone" dataKey="ch2" stroke="#50e991"/>
        <Line type="monotone" dataKey="ch3" stroke="#e6d800"/>
        <Line type="monotone" dataKey="ch4" stroke="#9b19f5"/>
        <Line type="monotone" dataKey="ch5" stroke="#ffa300"/>
        <Line type="monotone" dataKey="ch6" stroke="#dc0ab4"/>
        <Line type="monotone" dataKey="ch7" stroke="#b3d4ff"/>
        <Line type="monotone" dataKey="ch8" stroke="#00bfa0"/>
        <Line type="monotone" dataKey="ch9" stroke="#b30000"/>
        <Line type="monotone" dataKey="ch10" stroke="#7c1158"/>
        <Line type="monotone" dataKey="ch11" stroke="#4421af"/>
      </LineChart>
    </>
  );
}