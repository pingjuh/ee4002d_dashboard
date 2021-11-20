import React, { useState ,useEffect ,useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../layout/Spinner';
import Title from '../layout/Title';

export default function Heatmap() {
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState();
  let sensor0, sensors;

  if (connected) {
    sensor0 = data["sensorsReading"][0];
    sensors = data["sensorsReading"];
  }

  useEffect(() => {
    setResult(prevResult => sensors);
    // eslint-disable-next-line
  },[sensor0, connected]);

  console.log(sensors);
  
  if (!connected) return <Spinner/>;
 
  const series = [
    {
      name: "Channels",
      data: result
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: [
       0,1,2,3,4,5,6,7,8,9,10,11
      ],
    }
  };

  return (
    <>
      <Title> Heatmap</Title>
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={400}
        width={1300}
      />
    </>
  );
}
