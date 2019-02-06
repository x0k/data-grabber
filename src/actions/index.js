import { createAction } from 'redux-actions';

export const toggleFlag = createAction('TOGGLE_FLAG', flag => ({ flag }));