import { SET_TEST_TEXT, SET_TEST_PARAMETER } from '../actions';

const test = (state = { text: '', parameter: -1 }, action) => {
  switch(action.type) {
  case SET_TEST_TEXT:
    return {
      ...state,
      text: action.payload
    };
  case SET_TEST_PARAMETER:
    return {
      ...state,
      parameter: action.payload,
    };
  default:
    return state;
  }
};

export default test;