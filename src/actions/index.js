import { grab } from '../common/grabber';

const simpleAction = (type) => () => ({ type });

const transferAction = (type) => (payload) => ({ type, payload });

const indexedAction = (type) =>  (id, payload) => ({ type, id, payload, });

const createActions = (builder, ...actions) => actions.map(action => builder(action));

export const CREATE_API = 'CREATE_API';

export const SET_ANCHOR = 'SET_ANCHOR';

export const SET_MODAL = 'SET_MODAL';

export const SET_LINKS = 'SET_LINKS';

export const SET_USER = 'SET_USER';

export const ADD_PARAMETER = 'ADD_PARAMETER';

export const DEL_PARAMETER = 'DEL_PARAMETER';

export const SET_PARAMETER_NAME = 'SET_PARAMETER_NAME';

export const SET_PARAMETER_PATTER = 'SET_PARAMETER_PATTER';

export const SET_PARAMETER_ITEM = 'SET_PARAMETER_ITEM';

export const TOGGLE_FLAG = 'TOGGLE_FLAG';

export const SET_TEST = 'SET_TEST';

export const SET_RESULT = 'SET_RESULT';

export const SET_CONTAINER = 'SET_CONTAINER';

export const SET_STATUS = 'SET_STATUS';

export const SAVE_STATE = 'SAVE_STATE';

export const status = {
  none: 'none',
  loading: 'loading',
  test: 'test',
  show: 'show',
};

const [ addParameter ] = createActions(simpleAction,
  ADD_PARAMETER
);

const [ createAPI, setAnchor, setModal, setLinks, setUser, delParameter, setTest, setResult, setContainer, setStatus ] = createActions(transferAction,
  CREATE_API,
  SET_ANCHOR,
  SET_MODAL,
  SET_LINKS,
  SET_USER,
  DEL_PARAMETER,
  SET_TEST,
  SET_RESULT,
  SET_CONTAINER,
  SET_STATUS
);

const [ setParameterName, setParameterPattern, setParameterItem, toggleFlag ] = createActions(indexedAction,
  SET_PARAMETER_NAME,
  SET_PARAMETER_PATTER,
  SET_PARAMETER_ITEM,
  TOGGLE_FLAG
);

export {
  createAPI, setAnchor, setModal,
  setLinks, setUser, setResult,
  setContainer, setStatus, addParameter,
  delParameter, setParameterName, setParameterPattern,
  setParameterItem, toggleFlag
};

export function authorize () {
  return (dispatch, getState) => {
    let { api } = getState();
    if (!api) {
      dispatch(createAPI(status => {
        dispatch(setAnchor(null));
        dispatch(setUser(api && status ? api.user.getBasicProfile() : null));
      }));
      api = getState().api;
    } else {
      api.authorize();
    }
  };
}

export function runGraber () {
  return (dispatch, getState) => {
    dispatch(setStatus(status.loading));
    const { api, links, container, parameters } = getState();
    const fetch = (url) => api.fetch(url);
    const linksArray = links.split('\n');
    return grab(fetch, linksArray, parameters, container)
      .then(result => {
        dispatch(setResult(result));
        dispatch(setStatus(status.show));
      });
  };
}

export function test (parameter) {
  return (dispatch, getState) => {
    const { api, links } = getState();
    if (links.length === 0) {
      dispatch(setResult([ 'No links' ]));
      dispatch(setStatus(status.show));
    } else {
      dispatch(setStatus(status.loading));
      const link = links.split('\n')[0];
      return api.fetch(link)
        .then(response => response.result.response.result)
        .then(text => {
          dispatch(setTest({ text, parameter }));
          dispatch(setStatus(status.test));
        });
    }
  };
}
