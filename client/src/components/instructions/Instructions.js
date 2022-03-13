import React from 'react'
import Typography from '@mui/material/Typography';
import Title from '../layout/Title';

const Instructions = () => {
  return (
    <>
      <Title>
        Instructions
      </Title>
      <Typography variant="body1" color="#3B3B3B" gutterBottom>
        1️⃣ Press the Top Right Bluetooth Icon to connect to Smart Sensor Platform.
        2️⃣ Press "PLAY DEMO" to start the demo.
        3️⃣ Navigate to Past Results to view and download the past results.
      </Typography>
    </>
  )
}

export default Instructions