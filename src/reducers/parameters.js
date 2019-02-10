import {
  TOGGLE_FLAG,
  SET_PARAMETER_ITEM,
  SET_PARAMETER_PATTER,
  SET_PARAMETER_NAME,
  ADD_PARAMETER,
  DEL_PARAMETER,
} from '../actions';

const flags = (state, action) => {
  switch (action.type) {
  case TOGGLE_FLAG:
    return {
      ...state,
      [action.payload]: !state[action.payload],
    };
  default:
    return state;
  }
};

const createParameter = () => ({
  name: 'Parameter',
  pattern: '',
  item: '',
  flags: {
    i: true,
    g: false,
    m: false,
    s: false,
  }
});

const parameter = (state = createParameter(), action) => {
  switch (action.type) {
  case SET_PARAMETER_NAME:
    return {
      ...state,
      name: action.payload
    };
  case SET_PARAMETER_PATTER:
    return {
      ...state,
      pattern: action.payload,
    };
  case SET_PARAMETER_ITEM:
    return {
      ...state,
      item: action.payload
    };
  case TOGGLE_FLAG:
    return {
      ...state,
      flags: flags(state.flags, action),
    };
  default:
    return state;
  }
};

const parameters = (state = [], action) => {
  switch (action.type) {
  case ADD_PARAMETER:
    return [ ...state, parameter(undefined, action) ];
  case DEL_PARAMETER:
    return state.filter((el, id) => id !== action.payload);
  case SET_PARAMETER_NAME:
  case SET_PARAMETER_PATTER:
  case SET_PARAMETER_ITEM:
  case TOGGLE_FLAG:
    return state.map((el, id) => id === action.id ? parameter(el, action) : el);
  default:
    return state;
  }
};

export default parameters;