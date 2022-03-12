import React, { useState ,useEffect ,useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../layout/Spinner';

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
  }, [sensor0]);
  
  if (!connected || !result) return <Spinner/>;

  const ch0ch5 = result[0]*result[5];
  const ch1ch5 = result[1]*result[5];
  const ch2ch5 = result[2]*result[5];
  const ch3ch5 = result[3]*result[5];
  const ch4ch5 = result[4]*result[5];
  const ch0ch6 = result[0]*result[6];
  const ch1ch6 = result[1]*result[6];
  const ch2ch6 = result[2]*result[6];
  const ch3ch6 = result[3]*result[6];
  const ch4ch6 = result[4]*result[6];
  const ch0ch7 = result[0]*result[7];
  const ch1ch7 = result[1]*result[7];
  const ch2ch7 = result[2]*result[7];
  const ch3ch7 = result[3]*result[7];
  const ch4ch7 = result[4]*result[7];
  const ch0ch8 = result[0]*result[8];
  const ch1ch8 = result[1]*result[8];
  const ch2ch8 = result[2]*result[8];
  const ch3ch8 = result[3]*result[8];
  const ch4ch8 = result[4]*result[8];
  const ch0ch9 = result[0]*result[9];
  const ch1ch9 = result[1]*result[9];
  const ch2ch9 = result[2]*result[9];
  const ch3ch9 = result[3]*result[9];
  const ch4ch9 = result[4]*result[9];
  const ch0ch10 = result[0]*result[10];
  const ch1ch10 = result[1]*result[10];
  const ch2ch10 = result[2]*result[10];
  const ch3ch10 = result[3]*result[10];
  const ch4ch10 = result[4]*result[10];
  const ch0ch11 = result[0]*result[11];
  const ch1ch11 = result[1]*result[11];
  const ch2ch11 = result[2]*result[11];
  const ch3ch11 = result[3]*result[11];
  const ch4ch11 = result[4]*result[11];

  const firstRow = [ch0ch5, ch1ch5, ch2ch5, ch3ch5, ch4ch5];
  const secondRow = [ch0ch6, ch1ch6, ch2ch6, ch3ch6, ch4ch6];
  const thirdRow = [ch0ch7, ch1ch7, ch2ch7, ch3ch7, ch4ch7];
  const fourthRow = [ch0ch8, ch1ch8, ch2ch8, ch3ch8, ch4ch8];
  const fifthRow = [ch0ch9, ch1ch9, ch2ch9, ch3ch9, ch4ch9];
  const sixthRow = [ch0ch10, ch1ch10, ch2ch10, ch3ch10, ch4ch10];
  const seventhRow = [ch0ch11, ch1ch11, ch2ch11, ch3ch11, ch4ch11];

  const series = [
    {
      name: "12",
      data: seventhRow

    },
    {
      name: "11",
      data: sixthRow

    },
    {
      name: "10",
      data: fifthRow

    },
    {
      name: "9",
      data: fourthRow
    },
    {
      name: "8",
      data: thirdRow
    },
    {
      name: "7",
      data: secondRow
    },
    {
      name: "6",
      data: firstRow
    },
  ];

  const options = {
    chart: {
      type: 'heatmap',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      padding: {
        top: 0,
        bottom: 0,
        left: 30,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    // colors: ["#008FFB"],
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          // product range is from 0 to 27000
          ranges: [{
              from: 0,
              to: 6750,
              name: 'Touched',
              color: '#FF0000'
            },
            {
              from: 6751,
              to: 13500,
              name: 'medium',
              color: '#FFB200'
            },
            {
              from: 13501,
              to: 20250,
              name: 'high',
              color: '#128FD9'
            },
            {
              from: 20251,
              to: 27000,
              name: 'Untouched',
              color: '#00A100'
            }
          ]
        }
      },
    },
  };


  return (
    <ReactApexChart
      options={options}
      series={series}
      type="heatmap"
      height= {340}
      width={400}
    />
  );
}
