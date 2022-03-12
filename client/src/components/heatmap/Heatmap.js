import React, { useState ,useEffect ,useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import SensorContext from '../../context/sensor/sensorContext';
import Spinner from '../layout/Spinner';
import HeatmapContext from '../../context/heatmap/heatmapContext';

export default function Heatmap() {
  const { data, connected } = useContext(SensorContext);
  const [result, setResult] = useState();
  let sensor0, sensors;

  if (connected) {
    sensor0 = data["sensorsReading"][0];
    sensors = data["sensorsReading"];
  }

  const {
    ch0ch5,
    ch0ch6,
    ch0ch7,
    ch0ch8,
    ch0ch9,
    ch0ch10,
    ch0ch11,
    ch1ch5,
    ch1ch6,
    ch1ch7,
    ch1ch8,
    ch1ch9,
    ch1ch10,
    ch1ch11,
    ch2ch5,
    ch2ch6,
    ch2ch7,
    ch2ch8,
    ch2ch9,
    ch2ch10,
    ch2ch11,
    ch3ch5,
    ch3ch6,
    ch3ch7,
    ch3ch8,
    ch3ch9,
    ch3ch10,
    ch3ch11,
    ch4ch5,
    ch4ch6,
    ch4ch7,
    ch4ch8,
    ch4ch9,
    ch4ch10,
    ch4ch11,
  } = useContext(HeatmapContext);

  useEffect(() => {
    setResult(prevResult => sensors);
    // eslint-disable-next-line
  }, [sensor0]);
  
  if (!connected || !result) return <Spinner/>;

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
              to: 0,
              name: 'Touched',
              color: '#D3D3D3'
            },
            {
              from: 1,
              to: 1,
              name: 'Untouched',
              color: '#128FD9'
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
