import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import Textarea from './textarea';
import Parameter from './parameter';

import api from '../assets/gapi';
import ParameterData from '../assets/parameterData';
import Grabber from '../assets/grabber';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    padding: 20
  },
  button: {
    marginRight: 20,
  },
  icon: {
    fontSize: 26,
    margin: 5
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flags: {
    marginLeft: 30,
    minWidth: 180
  }
};

class App extends Component {

  state = {
    links: 'https://reactjs.org\nhttps://learn.javascript.ru',
    parameters: [
      new ParameterData({
        name: 'Title',
        pattern: '<title.*?>(.+)<\\/title>',
        item: '$1',
      }),
      new ParameterData({
        name: 'Links',
        pattern: '<a.+?href="(http.+?)".*?>([^<>]+?)<\\/a>',
        item: '<li>$2: <a href="$1">$1</a></li>',
        flags: { i: true, g: true, m: false }
      })
    ],
    itemsContainer: '<b>%Title%</b><br><ul>%Links%</ul>',
    result: [],
    user: null,
  };

  _userUpdate = status => {
    this.setState({
      user: status ? api.user : null
    });
  }

  constructor (props) {
    super(props);
    api.onStatusUpdate = this._userUpdate;
  }

  authHandler = () => {
    api.authorize();
  }

  changeHandler = name => event => {
    this.setState({ [name]: event.target.value });
  }

  runHandler = () => {
    const { parameters, itemsContainer, links } = this.state;
    let grab = Grabber.grab(parameters, itemsContainer);
    Promise.all(links.split('\n').map(link => api.fetch(link)))
      .then(result => result.map(text => grab(text)))
      .then(result => this.setState({ result }));
  }

  parameterChangeHandler = id => name => (event, value) => {
    this.setState(state => {
      state.parameters[id][name] = value;
      return state;
    });
  }
  
  parameterCheckHandler = id => key => (event, value) => {
    this.setState(state => {
      state.parameters[id].flags[key] = value;
      return state;
    });
  }

  parameterDeleteHandler = (id) => () => {
    this.setState(state => {
      state.parameters.splice(id, 1);
      return state;
    });
  }

  parameterAddHandler = () => {
    this.setState(state => {
      state.parameters.push(new ParameterData({}));
      return state;
    });
  }

  render() {

    const { classes } = this.props;
    const { links, parameters, itemsContainer, user, result } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Data grabber
            </Typography>
            <Button className={classes.button} color="inherit" onClick={this.authHandler} >
              { user ? user.w3.ig : 'Login' }
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Textarea
            label="Links"
            value={links}
            onChange={this.changeHandler('links')}
          />
        </div>
        {parameters.map((parameter, index) => (
          <Parameter
            className={classes.container}
            value={parameter}
            onChange={this.parameterChangeHandler(index)}
            onCheck={this.parameterCheckHandler(index)}
            onRemove={this.parameterDeleteHandler(index)}
          />
        ))}
        <div className={classes.container}>
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.runHandler} disabled={!user}>
            Run
          </Button>
          <Button variant="outlined" className={classes.button} onClick={this.addHandler} disabled={!user}>
            Add
          </Button>
        </div>
        <div className={classes.container}>
          <Textarea
            label="Items container"
            value={itemsContainer}
            onChange={this.changeHandler('itemsContainer')}
          />
        </div>
        {result.length > 0 &&
          result.map(element =>
            <div className={classes.container} dangerouslySetInnerHTML={{__html: element}}></div>
          )
        }
      </div>
    );
  }

}

export default withStyles(styles)(App);
