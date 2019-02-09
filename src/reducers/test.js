import { SET_TEST } from '../actions';

const test = (state = { text: '', parameter: -1 }, action) => {
  switch(action.type) {
  case SET_TEST:
    return action.payload;
  default:
    return state;
  }
};

export default test;