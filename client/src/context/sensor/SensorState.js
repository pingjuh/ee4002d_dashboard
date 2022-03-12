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
      const touched = 80;
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][5] < touched) setCh0Ch5(1);
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][6] < touched) setCh0Ch6(1);
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][7] < touched) setCh0Ch7(1);
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][8] < touched) setCh0Ch8(1);
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][9] < touched) setCh0Ch9(1);
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][10] < touched) setCh0Ch10(1);
      if (data["sensorsReading"][0] < touched && data["sensorsReading"][11] < touched) setCh0Ch11(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][5] < touched) setCh1Ch5(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][6] < touched) setCh1Ch6(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][7] < touched) setCh1Ch7(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][8] < touched) setCh1Ch8(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][9] < touched) setCh1Ch9(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][10] < touched) setCh1Ch10(1);
      if (data["sensorsReading"][1] < touched && data["sensorsReading"][11] < touched) setCh1Ch11(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][5] < touched) setCh2Ch5(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][6] < touched) setCh2Ch6(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][7] < touched) setCh2Ch7(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][8] < touched) setCh2Ch8(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][9] < touched) setCh2Ch9(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][10] < touched) setCh2Ch10(1);
      if (data["sensorsReading"][2] < touched && data["sensorsReading"][11] < touched) setCh2Ch11(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][5] < touched) setCh3Ch5(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][6] < touched) setCh3Ch6(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][7] < touched) setCh3Ch7(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][8] < touched) setCh3Ch8(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][9] < touched) setCh3Ch9(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][10] < touched) setCh3Ch10(1);
      if (data["sensorsReading"][3] < touched && data["sensorsReading"][11] < touched) setCh3Ch11(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][5] < touched) setCh4Ch5(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][6] < touched) setCh4Ch6(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][7] < touched) setCh4Ch7(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][8] < touched) setCh4Ch8(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][9] < touched) setCh4Ch9(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][10] < touched) setCh4Ch10(1);
      if (data["sensorsReading"][4] < touched && data["sensorsReading"][11] < touched) setCh4Ch11(1);
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
