import React, { useState ,useEffect ,useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../layout/Spinner';

export default function Heatmap( { rotate, height, width }) {
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
  }, [sensor0]);
  
  if (!connected || !result) return <Spinner/>;
  
  const series1 = [
    {
      name: "ch6",
      data: result.slice(6,7)
    },
    {
      name: "ch5",
      data: result.slice(5,6)
    },
    {
      name: "ch4",
      data: result.slice(4,5)
    },
    {
      name: "ch3",
      data: result.slice(3,4)
    },
    {
      name: "ch2",
      data: result.slice(2,3)
    },
    {
      name: "ch1",
      data: result.slice(1,2)
    },
    {
      name: "ch0",
      data: result.slice(0,1)
    } 
  ];

  const series2 = [
    {
      name: "ch7",
      data: result.slice(7,8)
    },
    {
      name: "ch8",
      data: result.slice(8,9)
    },
    {
      name: "ch9",
      data: result.slice(9,10)
    },
    {
      name: "ch10",
      data: result.slice(10,11)
    },
    {
      name: "ch11",
      data: result.slice(11,12)
    }
  ];

  let series = rotate ? series2 : series1;

  const options = {
    chart: {
      type: 'heatmap',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: true,
    },
    grid: {
      show: true,
      padding: {
        top: 0,
        bottom: 0,
        left: 62,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      // type: "category",
      labels: {
        show: false
      }
    },
    colors: ["#008FFB"],
    plotOptions: {
      heatmap: {
        enableShades: true,
        colorScale: {
          ranges: [{
              from: 0,
              to: 255,
              color: '#008FFB'
            },
          ],
        },
    
      }
    },
  };
  
  const style = {
    transform: rotate ? 'rotate(90deg)' : '', 
   }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="heatmap"
      height={height}
      width={width}
      style = {style}
    />
  );
}
