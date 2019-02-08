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

const redusers = combineReducers({
  api,
  anchor,
  user,
  links,
  parameters,
  test,
  container,
  result,
  status
});

export default redusers;