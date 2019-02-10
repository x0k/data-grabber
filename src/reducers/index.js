import { combineReducers } from 'redux';
import links from './links';
import parameters from './parameters';
import test from './test';
import container from './container';
import result from './result';
import user from './user';
import status from './status';
import api from './api';
import anchor from './anchor';
import modal from './modal';

import { LOAD_STATE } from '../actions';

const redusers = combineReducers({
  api,
  anchor,
  modal,
  user,
  links,
  parameters,
  test,
  container,
  result,
  status
});

export default (state, action) => {
  switch (action.type) {
  case LOAD_STATE:
    return { ...state, ...action.payload };
  default:
    return redusers(state, action);
  }
};