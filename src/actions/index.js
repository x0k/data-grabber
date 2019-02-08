const simpleAction = (name) => () => ({ type: name });

const transferAction = (name) => (payload) => ({ type: name, payload });

const indexedAction = (name) =>  (id, payload) => ({ type: name, id, payload, });

const createActions = (builder, ...actions) => actions.map(action => builder(action));

export const CREATE_API = 'CREATE_API';

export const SET_ANCHOR = 'SET_ANCHOR';

export const AUTHORIZE = 'AUTHORIZE';

export const SET_LINKS = 'SET_LINKS';

export const SET_USER = 'SET_USER';

export const ADD_PARAMETER = 'ADD_PARAMETER';

export const DEL_PARAMETER = 'DEL_PARAMETER';

export const SET_PARAMETER_NAME = 'SET_PARAMETER_NAME';

export const SET_PARAMETER_PATTER = 'SET_PARAMETER_PATTER';

export const SET_PARAMETER_ITEM = 'SET_PARAMETER_ITEM';

export const TOGGLE_FLAG = 'TOGGLE_FLAG';

export const SET_TEST_TEXT = 'SET_TEST_TEXT';

export const SET_TEST_PARAMETER = 'SET_TEST_PARAMETER';

export const SET_RESULT = 'SET_RESULT';

export const SET_CONTAINER = 'SET_CONTAINER';

export const SET_STATUS = 'SET_STATUS';

const [ authorize, addParameter ] = createActions(simpleAction, [
  AUTHORIZE,
  ADD_PARAMETER
]);

const [ createAPI, setAnchor, setLinks, setUser, delParameter, setTestText, setTestParameter, setResult, setContainer, setStatus ] = createActions(transferAction, [
  CREATE_API,
  SET_ANCHOR,
  SET_LINKS,
  SET_USER,
  DEL_PARAMETER,
  SET_TEST_TEXT,
  SET_TEST_PARAMETER,
  SET_RESULT,
  SET_CONTAINER,
  SET_STATUS
]);

const [ setParameterName, setParameterPattern, setParameterItem, toggleFlag ] = createActions(indexedAction, [
  SET_PARAMETER_NAME,
  SET_PARAMETER_PATTER,
  SET_PARAMETER_NAME,
  TOGGLE_FLAG
]);

export {
  createAPI, setAnchor, setLinks, setUser, setTestText, setTestParameter, setResult, setContainer, setStatus,
  authorize, addParameter, delParameter, setParameterName, setParameterPattern, setParameterItem, toggleFlag
};
