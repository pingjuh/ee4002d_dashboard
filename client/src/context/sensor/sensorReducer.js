import { GET_DATA, SET_CONNECTED} from '../types';

const sensorReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data : action.payload
      };
    case SET_CONNECTED:
      return {
        ...state,
        connected : true
      };
    default:
      return state;
  }
};

export default sensorReducer;