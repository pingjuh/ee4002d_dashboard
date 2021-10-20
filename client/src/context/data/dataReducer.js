import { GET_DATA} from '../types';

const dataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        data : action.payload
      }
      
    default:
      return state;
  }
};

export default dataReducer;