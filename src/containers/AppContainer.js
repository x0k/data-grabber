import { connect } from 'react-redux';

import App from '../components/app';

import {
  setAnchor,
  setModal,
  authorize,
  setLinks,
  setContainer,
  runGraber,
  toggleFlag,
  setParameterName,
  setParameterPattern,
  setParameterItem,
  delParameter,
  addParameter,
  test
} from '../actions';

const stateToProps = (state) => state;

const dispatchToProps = (dispatch) => ({
  menuHandler: (action) => (event) => dispatch(setAnchor(action ? event.currentTarget : null)),
  authHandler: () => dispatch(authorize()),
  linksChangeHandler: (event) => dispatch(setLinks(event.target.value)),
  containerChangeHandler: (event) => dispatch(setContainer(event.target.value)),
  runHandler: () => dispatch(runGraber()),
  parameterAddHandler: () => dispatch(addParameter()),
  parameterDeleteHandler: (id) => () => dispatch(delParameter(id)),
  parameterNameHandler: (id) => (event) => dispatch(setParameterName(id, event.target.value)),
  parameterPatternHandler: (id) => (event) => dispatch(setParameterPattern(id, event.target.value)),
  parameterItemHandler: (id) => (event) => dispatch(setParameterItem(id, event.target.value)),
  parameterCheckHandler: (id) => (name) => (event, value) => dispatch(toggleFlag(id, name)),
  parameterTestHandler: (id) => () => dispatch(test(id)),
  authorize: () => dispatch(authorize()),
  openModal: () => dispatch(setModal(true)),
  closeModal: () => dispatch(setModal(false)),
});

const AppContainer = connect(
  stateToProps,
  dispatchToProps,
)(App);

export default AppContainer;