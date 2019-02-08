import API from '../common/api';

import { CREATE_API, AUTHORIZE } from '../actions';

const api = (state = null, action) => {
  switch (action.type) {
  case CREATE_API:
    return new API(action.payload);
  case AUTHORIZE:
    state.authorize();
    return state;
  default:
    return state;
  }
};

export default api;
