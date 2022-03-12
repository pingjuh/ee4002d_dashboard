import { SET_CH0CH5, SET_CH0CH6, SET_CH0CH7, SET_CH0CH8, SET_CH0CH9, SET_CH0CH10, SET_CH0CH11 } from '../types';
import { SET_CH1CH5, SET_CH1CH6, SET_CH1CH7, SET_CH1CH8, SET_CH1CH9, SET_CH1CH10, SET_CH1CH11 } from '../types';
import { SET_CH2CH5, SET_CH2CH6, SET_CH2CH7, SET_CH2CH8, SET_CH2CH9, SET_CH2CH10, SET_CH2CH11 } from '../types';
import { SET_CH3CH5, SET_CH3CH6, SET_CH3CH7, SET_CH3CH8, SET_CH3CH9, SET_CH3CH10, SET_CH3CH11 } from '../types';
import { SET_CH4CH5, SET_CH4CH6, SET_CH4CH7, SET_CH4CH8, SET_CH4CH9, SET_CH4CH10, SET_CH4CH11 } from '../types';

const heatmapReducer = (state, action) => {
  switch (action.type) {
    case SET_CH0CH5:
      return {
        ...state,
        ch0ch5: action.payload
      };
    case SET_CH0CH6:
      return {
        ...state,
        ch0ch6: action.payload
      };
    case SET_CH0CH7:
      return {
        ...state,
        ch0ch7: action.payload
      };
    case SET_CH0CH8:
      return {
        ...state,
        ch0ch8: action.payload
      };
    case SET_CH0CH9:
      return {
        ...state,
        ch0ch9: action.payload
      };
    case SET_CH0CH10:
      return {
        ...state,
        ch0ch10: action.payload
      };
    case SET_CH0CH11:
      return {
        ...state,
        ch0ch11: action.payload
      };
    case SET_CH1CH5:
      return {
        ...state,
        ch1ch5: action.payload
      };
    case SET_CH1CH6:
      return {
        ...state,
        ch1ch6: action.payload
      };
    case SET_CH1CH7:
      return {
        ...state,
        ch1ch7: action.payload
      };
    case SET_CH1CH8:
      return {
        ...state,
        ch1ch8: action.payload
      };
    case SET_CH1CH9:
      return {
        ...state,
        ch1ch9: action.payload
      };
    case SET_CH1CH10:
      return {
        ...state,
        ch1ch10: action.payload
      };
    case SET_CH1CH11:
      return {
        ...state,
        ch1ch11: action.payload
      };
    case SET_CH2CH5:
      return {
        ...state,
        ch2ch5: action.payload
      };
    case SET_CH2CH6:
      return {
        ...state,
        ch2ch6: action.payload
      };
    case SET_CH2CH7:
      return {
        ...state,
        ch2ch7: action.payload
      };
    case SET_CH2CH8:
      return {
        ...state,
        ch2ch8: action.payload
      };
    case SET_CH2CH9:
      return {
        ...state,
        ch2ch9: action.payload
      };
    case SET_CH2CH10:
      return {
        ...state,
        ch2ch10: action.payload
      };
    case SET_CH2CH11:
      return {
        ...state,
        ch2ch11: action.payload
      };
    case SET_CH3CH5:
      return {
        ...state,
        ch3ch5: action.payload
      };
    case SET_CH3CH6:
      return {
        ...state,
        ch3ch6: action.payload
      };
    case SET_CH3CH7:
      return {
        ...state,
        ch3ch7: action.payload
      };
    case SET_CH3CH8:
      return {
        ...state,
        ch3ch8: action.payload
      };
    case SET_CH3CH9:
      return {
        ...state,
        ch3ch9: action.payload
      };
    case SET_CH3CH10:
      return {
        ...state,
        ch3ch10: action.payload
      };
    case SET_CH3CH11:
      return {
        ...state,
        ch3ch11: action.payload
      };
    case SET_CH4CH5:
      return {
        ...state,
        ch4ch5: action.payload
      };
    case SET_CH4CH6:
      return {
        ...state,
        ch4ch6: action.payload
      };
    case SET_CH4CH7:
      return {
        ...state,
        ch4ch7: action.payload
      };
    case SET_CH4CH8:
      return {
        ...state,
        ch4ch8: action.payload
      };
    case SET_CH4CH9:
      return {
        ...state,
        ch4ch9: action.payload
      };
    case SET_CH4CH10:
      return {
        ...state,
        ch4ch10: action.payload
      };
    case SET_CH4CH11:
      return {
        ...state,
        ch4ch11: action.payload
      };   
    default:
      return state;
  }
};

export default heatmapReducer;