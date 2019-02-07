import { SET_LINKS } from '../actions';

const links = (state = '', action) => {
  switch (action.type) {
  case SET_LINKS:
    return action.payload;
  default:
    return state;
  }
};

export default links;