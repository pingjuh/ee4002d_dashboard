import React, { useReducer } from 'react';
import HeatmapContext from './heatmapContext';
import HeatmapReducer from './heatmapReducer';
import { SET_CH0CH5, SET_CH0CH6, SET_CH0CH7, SET_CH0CH8, SET_CH0CH9, SET_CH0CH10, SET_CH0CH11 } from '../types';
import { SET_CH1CH5, SET_CH1CH6, SET_CH1CH7, SET_CH1CH8, SET_CH1CH9, SET_CH1CH10, SET_CH1CH11 } from '../types';
import { SET_CH2CH5, SET_CH2CH6, SET_CH2CH7, SET_CH2CH8, SET_CH2CH9, SET_CH2CH10, SET_CH2CH11 } from '../types';
import { SET_CH3CH5, SET_CH3CH6, SET_CH3CH7, SET_CH3CH8, SET_CH3CH9, SET_CH3CH10, SET_CH3CH11 } from '../types';
import { SET_CH4CH5, SET_CH4CH6, SET_CH4CH7, SET_CH4CH8, SET_CH4CH9, SET_CH4CH10, SET_CH4CH11 } from '../types';

const HeatmapState = props => {
  const initialState = {
    ch0ch5: 0,
    ch0ch6: 0,
    ch0ch7: 0,
    ch0ch8: 0,
    ch0ch9: 0,
    ch0ch10: 0,
    ch0ch11: 0,
    ch1ch5: 0,
    ch1ch6: 0,
    ch1ch7: 0,
    ch1ch8: 0,
    ch1ch9: 0,
    ch1ch10: 0,
    ch1ch11: 0,
    ch2ch5: 0,
    ch2ch6: 0,
    ch2ch7: 0,
    ch2ch8: 0,
    ch2ch9: 0,
    ch2ch10: 0,
    ch2ch11: 0,
    ch3ch5: 0,
    ch3ch6: 0,
    ch3ch7: 0,
    ch3ch8: 0,
    ch3ch9: 0,
    ch3ch10: 0,
    ch3ch11: 0,
    ch4ch5: 0,
    ch4ch6: 0,
    ch4ch7: 0,
    ch4ch8: 0,
    ch4ch9: 0,
    ch4ch10: 0,
    ch4ch11: 0
  }

  const [state, dispatch] = useReducer(HeatmapReducer, initialState);

  // Set the heatmap data
  const setCh0Ch5 = (data) => {
    dispatch({
      type: SET_CH0CH5,
      payload: data
    });
  }
  const setCh0Ch6 = (data) => {
    dispatch({
      type: SET_CH0CH6,
      payload: data
    });
  }
  const setCh0Ch7 = (data) => {
    dispatch({
      type: SET_CH0CH7,
      payload: data
    });
  }
  const setCh0Ch8 = (data) => {
    dispatch({
      type: SET_CH0CH8,
      payload: data
    });
  }
  const setCh0Ch9 = (data) => {
    dispatch({
      type: SET_CH0CH9,
      payload: data
    });
  }
  const setCh0Ch10 = (data) => {
    dispatch({
      type: SET_CH0CH10,
      payload: data
    });
  }
  const setCh0Ch11 = (data) => {
    dispatch({
      type: SET_CH0CH11,
      payload: data
    });
  }
  const setCh1Ch5 = (data) => {
    dispatch({
      type: SET_CH1CH5,
      payload: data
    });
  }
  const setCh1Ch6 = (data) => {
    dispatch({
      type: SET_CH1CH6,
      payload: data
    });
  }
  const setCh1Ch7 = (data) => {
    dispatch({
      type: SET_CH1CH7,
      payload: data
    });
  }
  const setCh1Ch8 = (data) => {
    dispatch({
      type: SET_CH1CH8,
      payload: data
    });
  }
  const setCh1Ch9 = (data) => {
    dispatch({
      type: SET_CH1CH9,
      payload: data
    });
  }
  const setCh1Ch10 = (data) => {
    dispatch({
      type: SET_CH1CH10,
      payload: data
    });
  }
  const setCh1Ch11 = (data) => {
    dispatch({
      type: SET_CH1CH11,
      payload: data
    });
  }
  const setCh2Ch5 = (data) => {
    dispatch({
      type: SET_CH2CH5,
      payload: data
    });
  }
  const setCh2Ch6 = (data) => {
    dispatch({
      type: SET_CH2CH6,
      payload: data
    });
  }
  const setCh2Ch7 = (data) => {
    dispatch({
      type: SET_CH2CH7,
      payload: data
    });
  }
  const setCh2Ch8 = (data) => {
    dispatch({
      type: SET_CH2CH8,
      payload: data
    });
  }
  const setCh2Ch9 = (data) => {
    dispatch({
      type: SET_CH2CH9,
      payload: data
    });
  }
  const setCh2Ch10 = (data) => {
    dispatch({
      type: SET_CH2CH10,
      payload: data
    });
  }
  const setCh2Ch11 = (data) => {
    dispatch({
      type: SET_CH2CH11,
      payload: data
    });
  }
  const setCh3Ch5 = (data) => {
    dispatch({
      type: SET_CH3CH5,
      payload: data
    });
  }
  const setCh3Ch6 = (data) => {
    dispatch({
      type: SET_CH3CH6,
      payload: data
    });
  }
  const setCh3Ch7 = (data) => {
    dispatch({
      type: SET_CH3CH7,
      payload: data
    });
  }
  const setCh3Ch8 = (data) => {
    dispatch({
      type: SET_CH3CH8,
      payload: data
    });
  }
  const setCh3Ch9 = (data) => {
    dispatch({
      type: SET_CH3CH9,
      payload: data
    });
  }
  const setCh3Ch10 = (data) => {
    dispatch({
      type: SET_CH3CH10,
      payload: data
    });
  }
  const setCh3Ch11 = (data) => {
    dispatch({
      type: SET_CH3CH11,
      payload: data
    });
  }
  const setCh4Ch5 = (data) => {
    dispatch({
      type: SET_CH4CH5,
      payload: data
    });
  }
  const setCh4Ch6 = (data) => {
    dispatch({
      type: SET_CH4CH6,
      payload: data
    });
  }
  const setCh4Ch7 = (data) => {
    dispatch({
      type: SET_CH4CH7,
      payload: data
    });
  }
  const setCh4Ch8 = (data) => {
    dispatch({
      type: SET_CH4CH8,
      payload: data
    });
  }
  const setCh4Ch9 = (data) => {
    dispatch({
      type: SET_CH4CH9,
      payload: data
    });
  }
  const setCh4Ch10 = (data) => {
    dispatch({
      type: SET_CH4CH10,
      payload: data
    });
  }
  const setCh4Ch11 = (data) => {
    dispatch({
      type: SET_CH4CH11,
      payload: data
    });
  }

  return <HeatmapContext.Provider 
    value={{
      ch0ch5: state.ch0ch5,
      ch0ch6: state.ch0ch6,
      ch0ch7: state.ch0ch7,
      ch0ch8: state.ch0ch8,
      ch0ch9: state.ch0ch9,
      ch0ch10: state.ch0ch10,
      ch0ch11: state.ch0ch11,
      ch1ch5: state.ch1ch5,
      ch1ch6: state.ch1ch6,
      ch1ch7: state.ch1ch7,
      ch1ch8: state.ch1ch8,
      ch1ch9: state.ch1ch9,
      ch1ch10: state.ch1ch10,
      ch1ch11: state.ch1ch11,
      ch2ch5: state.ch2ch5,
      ch2ch6: state.ch2ch6,
      ch2ch7: state.ch2ch7,
      ch2ch8: state.ch2ch8,
      ch2ch9: state.ch2ch9,
      ch2ch10: state.ch2ch10,
      ch2ch11: state.ch2ch11,
      ch3ch5: state.ch3ch5,
      ch3ch6: state.ch3ch6,
      ch3ch7: state.ch3ch7,
      ch3ch8: state.ch3ch8,
      ch3ch9: state.ch3ch9,
      ch3ch10: state.ch3ch10,
      ch3ch11: state.ch3ch11,
      ch4ch5: state.ch4ch5,
      ch4ch6: state.ch4ch6,
      ch4ch7: state.ch4ch7,
      ch4ch8: state.ch4ch8,
      ch4ch9: state.ch4ch9,
      ch4ch10: state.ch4ch10,
      ch4ch11: state.ch4ch11,
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
    }}
  >
    {props.children}
  </HeatmapContext.Provider>
}

export default HeatmapState;