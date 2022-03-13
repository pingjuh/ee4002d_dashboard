import React from 'react'
import Typography from '@mui/material/Typography';
import Title from '../layout/Title';


const Info = () => {
  return (
    <>
    <Title>
      We built a Smart Sensor
    </Title>
    <Typography variant="body1" color="#3B3B3B" gutterBottom>
      using an Adafruit MPR121 Capacitive Touch Sensor, a DFRobot Capacitive
      Touch Pad, and an Arduino Nano 33 BLE
    </Typography>
    <Title>
      To get started
    </Title>
    <Typography variant="body1" color="#3B3B3B" gutterBottom>
      💡 Please use Google Chrome and enable "Experimental Web Platform features" 
      👉 chrome://flags/#enable-experimental-web-platform-features
      &nbsp;
      1️⃣ Press the Top Right Bluetooth button to connect to Smart Sensor 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      2️⃣ Press the Top Right Play button to start streaming from Smart Sensor
      &nbsp;&nbsp;
      3️⃣ Navigate to Past Results to view and download the past results
    </Typography>
  </>
  )
}

export default Info