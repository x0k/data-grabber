import { handleActions } from 'redux-actions';

const flags = handleActions({
  'TOGGLE_FLAG': (state, action) => ({
    ...state,
    [action.payload.flag]: !state[action.payload.flag]
  })
},
{
  i: true,
  g: false,
  m: false,
  s: false,
});

const parameter = handleActions({

});