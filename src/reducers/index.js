import { combineReducers } from 'redux';
import links from './links';
import parameters from './parameters';
import test from './test';
import container from './container';
import result from './result';
import user from './user';
import status from './status';

const redusers = combineReducers({
  user,
  links,
  parameters,
  test,
  container,
  result,
  status
});

export default redusers;