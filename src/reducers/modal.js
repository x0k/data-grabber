import { SET_MODAL, SET_MODAL_ACTIONS } from '../actions';

const modal = (state = { open: false }, action) => {
  switch (action.type) {
  case SET_MODAL:
    return {
      ...state,
      open: action.payload,
    };
  case SET_MODAL_ACTIONS: {
    const { onLocal, onDrive } = action;
    return {
      ...state,
      onLocal,
      onDrive
    };
  }
  default:
    return state;
  }
};

export default modal;