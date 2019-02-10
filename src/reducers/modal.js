import { SET_MODAL } from '../actions';

const anchor = (state = false, action) => {
  switch (action.type) {
  case SET_MODAL:
    return action.payload;
  default:
    return state;
  }
};

export default anchor;