import { SET_CONTAINER } from '../actions';

const container = (state = '', action) => {
  switch (action.type) {
  case SET_CONTAINER:
    return action.payload;
  default:
    return state;
  }
};

export default container;
