import React, { useEffect, useReducer } from 'react';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import { GET_DATA, SET_CONNECTED } from '../types';
import io from 'socket.io-client';

const DataState = props => {
  const initialState = {
    data: [],
    connected: false
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  // Get the latest sensors reading from server
  // data["sensorsReading"] is of type [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  useEffect(() => {
    const PORT = process.env.PORT || 5000;
    const socket = io(`http://localhost:${PORT}`, { transports: ['websocket', 'polling'] });
    socket.on('sensor', data => {
      dispatch({
        type: GET_DATA,
        payload: data["sensorsReading"]
      })
      setConnnected();
    });
    return () => {
      socket.disconnect();
    }
  }, []);

  // Set Loading
  const setConnnected = () => dispatch({ type: SET_CONNECTED });

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        connected: state.connected
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
