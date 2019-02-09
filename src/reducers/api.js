import API from '../common/api';

import { CREATE_API } from '../actions';

const api = (state = null, action) => {
  switch (action.type) {
  case CREATE_API:
    return new API(action.payload);
  default:
    return state;
  }
};

export default api;
