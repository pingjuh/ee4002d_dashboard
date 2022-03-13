import React, { useEffect, useState, useContext} from 'react';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../spinner/Spinner';

export default function Result() {
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState();
  let classification;

  if (connected) {
    classification = data["sensorsReading"][12];
  }
  useEffect(() => {
    setResult(prevResult => classification);
    // eslint-disable-next-line
  }, [classification]);
  

  const style = {
    fontSize: "150px",
    textAlign: "center",
    marginTop: "0px",
    marginBottom: "20px",
    color: "#3B3B3B"
  }

  if (!connected || result <= 0) return <Spinner />;

  return (
    <h1 style={style}>
      {result} 
    </h1>
  );
};