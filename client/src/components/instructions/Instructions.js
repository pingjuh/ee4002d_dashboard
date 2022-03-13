import React from 'react'
import Typography from '@mui/material/Typography';
import Title from '../layout/Title';

const Instructions = () => {
  return (
    <>
      <Title>
        Demo
      </Title>
      <Typography variant="body1" color="#3B3B3B" gutterBottom>
        Press PLAY DEMO to start the demo
      </Typography>
      <Title>
        Instructions
      </Title>
      <Typography variant="body1" color="#3B3B3B" gutterBottom>
        1️⃣ Press the Top Right Bluetooth button to connect to Smart Sensor Platform
        2️⃣ Press the Top Right Play button to start streaming from Smart Sensor Platform
        3️⃣ Navigate to Past Results to view and download the past results
        4️⃣ Press 🔄 to clear Smart Sensor Display
      </Typography>
    </>
  )
}

export default Instructions