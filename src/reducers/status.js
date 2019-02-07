import { SET_STATUS } from '../actions';

const status = (state = 'none', action) => {
  switch (action.type) {
  case SET_STATUS:
    return action.payload;
  default:
    return state;
  }
};

export default status;