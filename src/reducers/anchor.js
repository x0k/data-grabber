import { SET_ANCHOR } from '../actions';

const anchor = (state = null, action) => {
  switch (action.type) {
  case SET_ANCHOR:
    return action.payload;
  default:
    return state;
  }
};

export default anchor;