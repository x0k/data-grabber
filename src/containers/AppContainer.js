import { connect } from 'react-redux';

import App from '../components/app';

import {
  setAnchor,
  authorize,
  setLinks,
  setContainer
} from '../actions';

const stateToProps = (state) => state;

const dispatchToProps = (dispatch) => ({
  menuHandler: (action) => (event) => dispatch(setAnchor(action ? event.currentTarget : null)),
  authHandler: () => dispatch(authorize()),
  linksChangeHandler: (event) => dispatch(setLinks(event.target.value)),
  containerChangeHandler: (event) => dispatch(setContainer(event.target.value)),
});

const AppContainer = connect(
  stateToProps,
  dispatchToProps,
)(App);

export default AppContainer;