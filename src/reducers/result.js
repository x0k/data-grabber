import { SET_RESULT } from '../actions';

const result = (state = [], action) => {
  switch(action.type) {
  case SET_RESULT:
    return action.payload;
  default:
    return state;
  }
};

export default result;