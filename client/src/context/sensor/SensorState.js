import React, { useEffect, useReducer, useContext } from 'react';
import SensorContext from './sensorContext';
import SensorReducer from './sensorReducer';
import { GET_DATA, SET_CONNECTED } from '../types';
import io from 'socket.io-client';
import HeatmapContext from '../heatmap/heatmapContext';

const SensorState = props => {
  const initialState = {
    data: [],
    connected: false
  };

  const [state, dispatch] = useReducer(SensorReducer, initialState);
  const { 
    setCh0Ch5,
    setCh0Ch6,
    setCh0Ch7,
    setCh0Ch8,
    setCh0Ch9,
    setCh0Ch10,
    setCh0Ch11,
    setCh1Ch5,
    setCh1Ch6,
    setCh1Ch7,
    setCh1Ch8,
    setCh1Ch9,
    setCh1Ch10,
    setCh1Ch11,
    setCh2Ch5,
    setCh2Ch6,
    setCh2Ch7,
    setCh2Ch8,
    setCh2Ch9,
    setCh2Ch10,
    setCh2Ch11,
    setCh3Ch5,
    setCh3Ch6,
    setCh3Ch7,
    setCh3Ch8,
    setCh3Ch9,
    setCh3Ch10,
    setCh3Ch11,
    setCh4Ch5,
    setCh4Ch6,
    setCh4Ch7,
    setCh4Ch8,
    setCh4Ch9,
    setCh4Ch10,
    setCh4Ch11
  } = useContext(HeatmapContext);

  // Get the latest sensors reading from server
  // data["sensorsReading"] is of type [0,1,2,3,4,5,6,7,8,9,10,11]
  useEffect(() => {
    const socket = io();
    socket.on('sensor', data => {
      dispatch({
        type: GET_DATA,
        payload: data
      })
      setConnected();
      // Set Heatmap data
      const lv_0 = 140;
      const lv_1 = 120;
      const lv_2 = 100;
      const lv_3 = 80;
      const lv_4 = 60;
      const lv_5 = 40;
      const lv_6 = 20;
  

      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][5] < lv_0 && data["sensorsReading"][5] > lv_1) setCh0Ch5(1);
      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][6] < lv_0 && data["sensorsReading"][6] > lv_1) setCh0Ch6(1);
      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][7] < lv_0 && data["sensorsReading"][7] > lv_1) setCh0Ch7(1);
      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][8] < lv_0 && data["sensorsReading"][8] > lv_1) setCh0Ch8(1);
      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][9] < lv_0 && data["sensorsReading"][9] > lv_1) setCh0Ch9(1);
      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][10] < lv_0 && data["sensorsReading"][10] > lv_1) setCh0Ch10(1);
      if (data["sensorsReading"][0] < lv_0 && data["sensorsReading"][0] > lv_1 && data["sensorsReading"][11] < lv_0 && data["sensorsReading"][11] > lv_1) setCh0Ch11(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][5] < lv_0 && data["sensorsReading"][5] > lv_1) setCh1Ch5(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][6] < lv_0 && data["sensorsReading"][6] > lv_1) setCh1Ch6(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][7] < lv_0 && data["sensorsReading"][7] > lv_1) setCh1Ch7(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][8] < lv_0 && data["sensorsReading"][8] > lv_1) setCh1Ch8(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][9] < lv_0 && data["sensorsReading"][9] > lv_1) setCh1Ch9(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][10] < lv_0 && data["sensorsReading"][10] > lv_1) setCh1Ch10(1);
      if (data["sensorsReading"][1] < lv_0 && data["sensorsReading"][1] > lv_1 && data["sensorsReading"][11] < lv_0 && data["sensorsReading"][11] > lv_1) setCh1Ch11(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][5] < lv_0 && data["sensorsReading"][5] > lv_1) setCh2Ch5(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][6] < lv_0 && data["sensorsReading"][6] > lv_1) setCh2Ch6(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][7] < lv_0 && data["sensorsReading"][7] > lv_1) setCh2Ch7(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][8] < lv_0 && data["sensorsReading"][8] > lv_1) setCh2Ch8(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][9] < lv_0 && data["sensorsReading"][9] > lv_1) setCh2Ch9(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][10] < lv_0 && data["sensorsReading"][10] > lv_1) setCh2Ch10(1);
      if (data["sensorsReading"][2] < lv_0 && data["sensorsReading"][2] > lv_1 && data["sensorsReading"][11] < lv_0 && data["sensorsReading"][11] > lv_1) setCh2Ch11(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][5] < lv_0 && data["sensorsReading"][5] > lv_1) setCh3Ch5(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][6] < lv_0 && data["sensorsReading"][6] > lv_1) setCh3Ch6(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][7] < lv_0 && data["sensorsReading"][7] > lv_1) setCh3Ch7(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][8] < lv_0 && data["sensorsReading"][8] > lv_1) setCh3Ch8(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][9] < lv_0 && data["sensorsReading"][9] > lv_1) setCh3Ch9(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][10] < lv_0 && data["sensorsReading"][10] > lv_1) setCh3Ch10(1);
      if (data["sensorsReading"][3] < lv_0 && data["sensorsReading"][3] > lv_1 && data["sensorsReading"][11] < lv_0 && data["sensorsReading"][11] > lv_1) setCh3Ch11(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][5] < lv_0 && data["sensorsReading"][5] > lv_1) setCh4Ch5(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][6] < lv_0 && data["sensorsReading"][6] > lv_1) setCh4Ch6(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][7] < lv_0 && data["sensorsReading"][7] > lv_1) setCh4Ch7(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][8] < lv_0 && data["sensorsReading"][8] > lv_1) setCh4Ch8(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][9] < lv_0 && data["sensorsReading"][9] > lv_1) setCh4Ch9(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][10] < lv_0 && data["sensorsReading"][10] > lv_1) setCh4Ch10(1);
      if (data["sensorsReading"][4] < lv_0 && data["sensorsReading"][4] > lv_1 && data["sensorsReading"][11] < lv_0 && data["sensorsReading"][11] > lv_1) setCh4Ch11(1);

      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][5] < lv_1 && data["sensorsReading"][5] > lv_2) setCh0Ch5(2);
      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][6] < lv_1 && data["sensorsReading"][6] > lv_2) setCh0Ch6(2);
      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][7] < lv_1 && data["sensorsReading"][7] > lv_2) setCh0Ch7(2);
      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][8] < lv_1 && data["sensorsReading"][8] > lv_2) setCh0Ch8(2);
      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][9] < lv_1 && data["sensorsReading"][9] > lv_2) setCh0Ch9(2);
      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][10] < lv_1 && data["sensorsReading"][10] > lv_2) setCh0Ch10(2);
      if (data["sensorsReading"][0] < lv_1 && data["sensorsReading"][0] > lv_2 && data["sensorsReading"][11] < lv_1 && data["sensorsReading"][11] > lv_2) setCh0Ch11(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][5] < lv_1 && data["sensorsReading"][5] > lv_2) setCh1Ch5(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][6] < lv_1 && data["sensorsReading"][6] > lv_2) setCh1Ch6(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][7] < lv_1 && data["sensorsReading"][7] > lv_2) setCh1Ch7(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][8] < lv_1 && data["sensorsReading"][8] > lv_2) setCh1Ch8(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][9] < lv_1 && data["sensorsReading"][9] > lv_2) setCh1Ch9(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][10] < lv_1 && data["sensorsReading"][10] > lv_2) setCh1Ch10(2);
      if (data["sensorsReading"][1] < lv_1 && data["sensorsReading"][1] > lv_2 && data["sensorsReading"][11] < lv_1 && data["sensorsReading"][11] > lv_2) setCh1Ch11(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][5] < lv_1 && data["sensorsReading"][5] > lv_2) setCh2Ch5(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][6] < lv_1 && data["sensorsReading"][6] > lv_2) setCh2Ch6(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][7] < lv_1 && data["sensorsReading"][7] > lv_2) setCh2Ch7(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][8] < lv_1 && data["sensorsReading"][8] > lv_2) setCh2Ch8(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][9] < lv_1 && data["sensorsReading"][9] > lv_2) setCh2Ch9(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][10] < lv_1 && data["sensorsReading"][10] > lv_2) setCh2Ch10(2);
      if (data["sensorsReading"][2] < lv_1 && data["sensorsReading"][2] > lv_2 && data["sensorsReading"][11] < lv_1 && data["sensorsReading"][11] > lv_2) setCh2Ch11(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][5] < lv_1 && data["sensorsReading"][5] > lv_2) setCh3Ch5(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][6] < lv_1 && data["sensorsReading"][6] > lv_2) setCh3Ch6(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][7] < lv_1 && data["sensorsReading"][7] > lv_2) setCh3Ch7(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][8] < lv_1 && data["sensorsReading"][8] > lv_2) setCh3Ch8(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][9] < lv_1 && data["sensorsReading"][9] > lv_2) setCh3Ch9(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][10] < lv_1 && data["sensorsReading"][10] > lv_2) setCh3Ch10(2);
      if (data["sensorsReading"][3] < lv_1 && data["sensorsReading"][3] > lv_2 && data["sensorsReading"][11] < lv_1 && data["sensorsReading"][11] > lv_2) setCh3Ch11(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][5] < lv_1 && data["sensorsReading"][5] > lv_2) setCh4Ch5(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][6] < lv_1 && data["sensorsReading"][6] > lv_2) setCh4Ch6(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][7] < lv_1 && data["sensorsReading"][7] > lv_2) setCh4Ch7(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][8] < lv_1 && data["sensorsReading"][8] > lv_2) setCh4Ch8(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][9] < lv_1 && data["sensorsReading"][9] > lv_2) setCh4Ch9(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][10] < lv_1 && data["sensorsReading"][10] > lv_2) setCh4Ch10(2);
      if (data["sensorsReading"][4] < lv_1 && data["sensorsReading"][4] > lv_2 && data["sensorsReading"][11] < lv_1 && data["sensorsReading"][11] > lv_2) setCh4Ch11(2);

      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][5] < lv_2 && data["sensorsReading"][5] > lv_3) setCh0Ch5(3);
      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][6] < lv_2 && data["sensorsReading"][6] > lv_3) setCh0Ch6(3);
      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][7] < lv_2 && data["sensorsReading"][7] > lv_3) setCh0Ch7(3);
      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][8] < lv_2 && data["sensorsReading"][8] > lv_3) setCh0Ch8(3);
      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][9] < lv_2 && data["sensorsReading"][9] > lv_3) setCh0Ch9(3);
      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][10] < lv_2 && data["sensorsReading"][10] > lv_3) setCh0Ch10(3);
      if (data["sensorsReading"][0] < lv_2 && data["sensorsReading"][0] > lv_3 && data["sensorsReading"][11] < lv_2 && data["sensorsReading"][11] > lv_3) setCh0Ch11(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][5] < lv_2 && data["sensorsReading"][5] > lv_3) setCh1Ch5(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][6] < lv_2 && data["sensorsReading"][6] > lv_3) setCh1Ch6(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][7] < lv_2 && data["sensorsReading"][7] > lv_3) setCh1Ch7(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][8] < lv_2 && data["sensorsReading"][8] > lv_3) setCh1Ch8(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][9] < lv_2 && data["sensorsReading"][9] > lv_3) setCh1Ch9(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][10] < lv_2 && data["sensorsReading"][10] > lv_3) setCh1Ch10(3);
      if (data["sensorsReading"][1] < lv_2 && data["sensorsReading"][1] > lv_3 && data["sensorsReading"][11] < lv_2 && data["sensorsReading"][11] > lv_3) setCh1Ch11(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][5] < lv_2 && data["sensorsReading"][5] > lv_3) setCh2Ch5(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][6] < lv_2 && data["sensorsReading"][6] > lv_3) setCh2Ch6(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][7] < lv_2 && data["sensorsReading"][7] > lv_3) setCh2Ch7(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][8] < lv_2 && data["sensorsReading"][8] > lv_3) setCh2Ch8(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][9] < lv_2 && data["sensorsReading"][9] > lv_3) setCh2Ch9(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][10] < lv_2 && data["sensorsReading"][10] > lv_3) setCh2Ch10(3);
      if (data["sensorsReading"][2] < lv_2 && data["sensorsReading"][2] > lv_3 && data["sensorsReading"][11] < lv_2 && data["sensorsReading"][11] > lv_3) setCh2Ch11(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][5] < lv_2 && data["sensorsReading"][5] > lv_3) setCh3Ch5(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][6] < lv_2 && data["sensorsReading"][6] > lv_3) setCh3Ch6(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][7] < lv_2 && data["sensorsReading"][7] > lv_3) setCh3Ch7(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][8] < lv_2 && data["sensorsReading"][8] > lv_3) setCh3Ch8(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][9] < lv_2 && data["sensorsReading"][9] > lv_3) setCh3Ch9(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][10] < lv_2 && data["sensorsReading"][10] > lv_3) setCh3Ch10(3);
      if (data["sensorsReading"][3] < lv_2 && data["sensorsReading"][3] > lv_3 && data["sensorsReading"][11] < lv_2 && data["sensorsReading"][11] > lv_3) setCh3Ch11(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][5] < lv_2 && data["sensorsReading"][5] > lv_3) setCh4Ch5(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][6] < lv_2 && data["sensorsReading"][6] > lv_3) setCh4Ch6(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][7] < lv_2 && data["sensorsReading"][7] > lv_3) setCh4Ch7(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][8] < lv_2 && data["sensorsReading"][8] > lv_3) setCh4Ch8(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][9] < lv_2 && data["sensorsReading"][9] > lv_3) setCh4Ch9(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][10] < lv_2 && data["sensorsReading"][10] > lv_3) setCh4Ch10(3);
      if (data["sensorsReading"][4] < lv_2 && data["sensorsReading"][4] > lv_3 && data["sensorsReading"][11] < lv_2 && data["sensorsReading"][11] > lv_3) setCh4Ch11(3);

      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][5] < lv_3 && data["sensorsReading"][5] > lv_4) setCh0Ch5(4);
      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][6] < lv_3 && data["sensorsReading"][6] > lv_4) setCh0Ch6(4);
      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][7] < lv_3 && data["sensorsReading"][7] > lv_4) setCh0Ch7(4);
      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][8] < lv_3 && data["sensorsReading"][8] > lv_4) setCh0Ch8(4);
      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][9] < lv_3 && data["sensorsReading"][9] > lv_4) setCh0Ch9(4);
      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][10] < lv_3 && data["sensorsReading"][10] > lv_4) setCh0Ch10(4);
      if (data["sensorsReading"][0] < lv_3 && data["sensorsReading"][0] > lv_4 && data["sensorsReading"][11] < lv_3 && data["sensorsReading"][11] > lv_4) setCh0Ch11(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][5] < lv_3 && data["sensorsReading"][5] > lv_4) setCh1Ch5(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][6] < lv_3 && data["sensorsReading"][6] > lv_4) setCh1Ch6(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][7] < lv_3 && data["sensorsReading"][7] > lv_4) setCh1Ch7(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][8] < lv_3 && data["sensorsReading"][8] > lv_4) setCh1Ch8(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][9] < lv_3 && data["sensorsReading"][9] > lv_4) setCh1Ch9(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][10] < lv_3 && data["sensorsReading"][10] > lv_4) setCh1Ch10(4);
      if (data["sensorsReading"][1] < lv_3 && data["sensorsReading"][1] > lv_4 && data["sensorsReading"][11] < lv_3 && data["sensorsReading"][11] > lv_4) setCh1Ch11(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][5] < lv_3 && data["sensorsReading"][5] > lv_4) setCh2Ch5(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][6] < lv_3 && data["sensorsReading"][6] > lv_4) setCh2Ch6(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][7] < lv_3 && data["sensorsReading"][7] > lv_4) setCh2Ch7(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][8] < lv_3 && data["sensorsReading"][8] > lv_4) setCh2Ch8(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][9] < lv_3 && data["sensorsReading"][9] > lv_4) setCh2Ch9(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][10] < lv_3 && data["sensorsReading"][10] > lv_4) setCh2Ch10(4);
      if (data["sensorsReading"][2] < lv_3 && data["sensorsReading"][2] > lv_4 && data["sensorsReading"][11] < lv_3 && data["sensorsReading"][11] > lv_4) setCh2Ch11(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][5] < lv_3 && data["sensorsReading"][5] > lv_4) setCh3Ch5(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][6] < lv_3 && data["sensorsReading"][6] > lv_4) setCh3Ch6(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][7] < lv_3 && data["sensorsReading"][7] > lv_4) setCh3Ch7(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][8] < lv_3 && data["sensorsReading"][8] > lv_4) setCh3Ch8(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][9] < lv_3 && data["sensorsReading"][9] > lv_4) setCh3Ch9(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][10] < lv_3 && data["sensorsReading"][10] > lv_4) setCh3Ch10(4);
      if (data["sensorsReading"][3] < lv_3 && data["sensorsReading"][3] > lv_4 && data["sensorsReading"][11] < lv_3 && data["sensorsReading"][11] > lv_4) setCh3Ch11(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][5] < lv_3 && data["sensorsReading"][5] > lv_4) setCh4Ch5(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][6] < lv_3 && data["sensorsReading"][6] > lv_4) setCh4Ch6(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][7] < lv_3 && data["sensorsReading"][7] > lv_4) setCh4Ch7(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][8] < lv_3 && data["sensorsReading"][8] > lv_4) setCh4Ch8(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][9] < lv_3 && data["sensorsReading"][9] > lv_4) setCh4Ch9(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][10] < lv_3 && data["sensorsReading"][10] > lv_4) setCh4Ch10(4);
      if (data["sensorsReading"][4] < lv_3 && data["sensorsReading"][4] > lv_4 && data["sensorsReading"][11] < lv_3 && data["sensorsReading"][11] > lv_4) setCh4Ch11(4);

      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][5] < lv_4 && data["sensorsReading"][5] > lv_5) setCh0Ch5(5);
      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][6] < lv_4 && data["sensorsReading"][6] > lv_5) setCh0Ch6(5);
      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][7] < lv_4 && data["sensorsReading"][7] > lv_5) setCh0Ch7(5);
      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][8] < lv_4 && data["sensorsReading"][8] > lv_5) setCh0Ch8(5);
      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][9] < lv_4 && data["sensorsReading"][9] > lv_5) setCh0Ch9(5);
      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][10] < lv_4 && data["sensorsReading"][10] > lv_5) setCh0Ch10(5);
      if (data["sensorsReading"][0] < lv_4 && data["sensorsReading"][0] > lv_5 && data["sensorsReading"][11] < lv_4 && data["sensorsReading"][11] > lv_5) setCh0Ch11(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][5] < lv_4 && data["sensorsReading"][5] > lv_5) setCh1Ch5(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][6] < lv_4 && data["sensorsReading"][6] > lv_5) setCh1Ch6(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][7] < lv_4 && data["sensorsReading"][7] > lv_5) setCh1Ch7(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][8] < lv_4 && data["sensorsReading"][8] > lv_5) setCh1Ch8(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][9] < lv_4 && data["sensorsReading"][9] > lv_5) setCh1Ch9(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][10] < lv_4 && data["sensorsReading"][10] > lv_5) setCh1Ch10(5);
      if (data["sensorsReading"][1] < lv_4 && data["sensorsReading"][1] > lv_5 && data["sensorsReading"][11] < lv_4 && data["sensorsReading"][11] > lv_5) setCh1Ch11(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][5] < lv_4 && data["sensorsReading"][5] > lv_5) setCh2Ch5(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][6] < lv_4 && data["sensorsReading"][6] > lv_5) setCh2Ch6(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][7] < lv_4 && data["sensorsReading"][7] > lv_5) setCh2Ch7(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][8] < lv_4 && data["sensorsReading"][8] > lv_5) setCh2Ch8(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][9] < lv_4 && data["sensorsReading"][9] > lv_5) setCh2Ch9(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][10] < lv_4 && data["sensorsReading"][10] > lv_5) setCh2Ch10(5);
      if (data["sensorsReading"][2] < lv_4 && data["sensorsReading"][2] > lv_5 && data["sensorsReading"][11] < lv_4 && data["sensorsReading"][11] > lv_5) setCh2Ch11(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][5] < lv_4 && data["sensorsReading"][5] > lv_5) setCh3Ch5(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][6] < lv_4 && data["sensorsReading"][6] > lv_5) setCh3Ch6(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][7] < lv_4 && data["sensorsReading"][7] > lv_5) setCh3Ch7(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][8] < lv_4 && data["sensorsReading"][8] > lv_5) setCh3Ch8(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][9] < lv_4 && data["sensorsReading"][9] > lv_5) setCh3Ch9(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][10] < lv_4 && data["sensorsReading"][10] > lv_5) setCh3Ch10(5);
      if (data["sensorsReading"][3] < lv_4 && data["sensorsReading"][3] > lv_5 && data["sensorsReading"][11] < lv_4 && data["sensorsReading"][11] > lv_5) setCh3Ch11(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][5] < lv_4 && data["sensorsReading"][5] > lv_5) setCh4Ch5(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][6] < lv_4 && data["sensorsReading"][6] > lv_5) setCh4Ch6(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][7] < lv_4 && data["sensorsReading"][7] > lv_5) setCh4Ch7(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][8] < lv_4 && data["sensorsReading"][8] > lv_5) setCh4Ch8(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][9] < lv_4 && data["sensorsReading"][9] > lv_5) setCh4Ch9(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][10] < lv_4 && data["sensorsReading"][10] > lv_5) setCh4Ch10(5);
      if (data["sensorsReading"][4] < lv_4 && data["sensorsReading"][4] > lv_5 && data["sensorsReading"][11] < lv_4 && data["sensorsReading"][11] > lv_5) setCh4Ch11(5);

      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][5] < lv_5 && data["sensorsReading"][5] > lv_6) setCh0Ch5(6);
      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][6] < lv_5 && data["sensorsReading"][6] > lv_6) setCh0Ch6(6);
      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][7] < lv_5 && data["sensorsReading"][7] > lv_6) setCh0Ch7(6);
      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][8] < lv_5 && data["sensorsReading"][8] > lv_6) setCh0Ch8(6);
      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][9] < lv_5 && data["sensorsReading"][9] > lv_6) setCh0Ch9(6);
      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][10] < lv_5 && data["sensorsReading"][10] > lv_6) setCh0Ch10(6);
      if (data["sensorsReading"][0] < lv_5 && data["sensorsReading"][0] > lv_6 && data["sensorsReading"][11] < lv_5 && data["sensorsReading"][11] > lv_6) setCh0Ch11(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][5] < lv_5 && data["sensorsReading"][5] > lv_6) setCh1Ch5(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][6] < lv_5 && data["sensorsReading"][6] > lv_6) setCh1Ch6(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][7] < lv_5 && data["sensorsReading"][7] > lv_6) setCh1Ch7(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][8] < lv_5 && data["sensorsReading"][8] > lv_6) setCh1Ch8(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][9] < lv_5 && data["sensorsReading"][9] > lv_6) setCh1Ch9(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][10] < lv_5 && data["sensorsReading"][10] > lv_6) setCh1Ch10(6);
      if (data["sensorsReading"][1] < lv_5 && data["sensorsReading"][1] > lv_6 && data["sensorsReading"][11] < lv_5 && data["sensorsReading"][11] > lv_6) setCh1Ch11(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][5] < lv_5 && data["sensorsReading"][5] > lv_6) setCh2Ch5(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][6] < lv_5 && data["sensorsReading"][6] > lv_6) setCh2Ch6(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][7] < lv_5 && data["sensorsReading"][7] > lv_6) setCh2Ch7(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][8] < lv_5 && data["sensorsReading"][8] > lv_6) setCh2Ch8(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][9] < lv_5 && data["sensorsReading"][9] > lv_6) setCh2Ch9(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][10] < lv_5 && data["sensorsReading"][10] > lv_6) setCh2Ch10(6);
      if (data["sensorsReading"][2] < lv_5 && data["sensorsReading"][2] > lv_6 && data["sensorsReading"][11] < lv_5 && data["sensorsReading"][11] > lv_6) setCh2Ch11(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][5] < lv_5 && data["sensorsReading"][5] > lv_6) setCh3Ch5(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][6] < lv_5 && data["sensorsReading"][6] > lv_6) setCh3Ch6(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][7] < lv_5 && data["sensorsReading"][7] > lv_6) setCh3Ch7(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][8] < lv_5 && data["sensorsReading"][8] > lv_6) setCh3Ch8(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][9] < lv_5 && data["sensorsReading"][9] > lv_6) setCh3Ch9(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][10] < lv_5 && data["sensorsReading"][10] > lv_6) setCh3Ch10(6);
      if (data["sensorsReading"][3] < lv_5 && data["sensorsReading"][3] > lv_6 && data["sensorsReading"][11] < lv_5 && data["sensorsReading"][11] > lv_6) setCh3Ch11(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][5] < lv_5 && data["sensorsReading"][5] > lv_6) setCh4Ch5(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][6] < lv_5 && data["sensorsReading"][6] > lv_6) setCh4Ch6(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][7] < lv_5 && data["sensorsReading"][7] > lv_6) setCh4Ch7(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][8] < lv_5 && data["sensorsReading"][8] > lv_6) setCh4Ch8(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][9] < lv_5 && data["sensorsReading"][9] > lv_6) setCh4Ch9(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][10] < lv_5 && data["sensorsReading"][10] > lv_6) setCh4Ch10(6);
      if (data["sensorsReading"][4] < lv_5 && data["sensorsReading"][4] > lv_6 && data["sensorsReading"][11] < lv_5 && data["sensorsReading"][11] > lv_6) setCh4Ch11(6); 

      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][5] < lv_6) setCh0Ch5(7);
      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][6] < lv_6) setCh0Ch6(7);
      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][7] < lv_6) setCh0Ch7(7);
      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][8] < lv_6) setCh0Ch8(7);
      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][9] < lv_6) setCh0Ch9(7);
      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][10] < lv_6) setCh0Ch10(7);
      if (data["sensorsReading"][0] < lv_6 && data["sensorsReading"][11] < lv_6) setCh0Ch11(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][5] < lv_6) setCh1Ch5(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][6] < lv_6) setCh1Ch6(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][7] < lv_6) setCh1Ch7(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][8] < lv_6) setCh1Ch8(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][9] < lv_6) setCh1Ch9(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][10] < lv_6) setCh1Ch10(7);
      if (data["sensorsReading"][1] < lv_6 && data["sensorsReading"][11] < lv_6) setCh1Ch11(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][5] < lv_6) setCh2Ch5(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][6] < lv_6) setCh2Ch6(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][7] < lv_6) setCh2Ch7(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][8] < lv_6) setCh2Ch8(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][9] < lv_6) setCh2Ch9(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][10] < lv_6) setCh2Ch10(7);
      if (data["sensorsReading"][2] < lv_6 && data["sensorsReading"][11] < lv_6) setCh2Ch11(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][5] < lv_6) setCh3Ch5(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][6] < lv_6) setCh3Ch6(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][7] < lv_6) setCh3Ch7(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][8] < lv_6) setCh3Ch8(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][9] < lv_6) setCh3Ch9(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][10] < lv_6) setCh3Ch10(7);
      if (data["sensorsReading"][3] < lv_6 && data["sensorsReading"][11] < lv_6) setCh3Ch11(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][5] < lv_6) setCh4Ch5(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][6] < lv_6) setCh4Ch6(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][7] < lv_6) setCh4Ch7(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][8] < lv_6) setCh4Ch8(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][9] < lv_6) setCh4Ch9(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][10] < lv_6) setCh4Ch10(7);
      if (data["sensorsReading"][4] < lv_6 && data["sensorsReading"][11] < lv_6) setCh4Ch11(7); 
    });
    return () => {
      socket.disconnect();
    }
  }, []);

  // Set Loading
  const setConnected = () => dispatch({ type: SET_CONNECTED });

  return (
    <SensorContext.Provider
      value={{
        data: state.data,
        connected: state.connected
      }}
    >
      {props.children}
    </SensorContext.Provider>
  );
};

export default SensorState;
