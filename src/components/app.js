import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { withStyles } from '@material-ui/core/styles';

import api from '../assets/gapi';
import Grabber from '../assets/grabber';

const styles = theme => ({
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
    margin: 0,
  },
  icon: {
    fontSize: 26,
    margin: 5
  },
  variableBar: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    padding: 20
  }
});

class Parameter {

  name = 'Parameter';
  pattern = '';
  flags = {
    i: true,
    g: false,
    m: false,
  };

  constructor (name, pattern) {
    this.name = name;
    this.pattern = pattern;
  }

  flagsToString () {
    let result = '';
    for (let key of Object.keys(this.flags)) {
      if (this.flags[key])
        result += key;
    }
    return result;
  }

}

class App extends Component {

  state = {
    links: 'https://reactjs.org',
    parameters: [
      new Parameter('Title', '<title.*>(.+)<\\/title>')
    ],
    resultString: 'Title: %Title%',
    result: '',
    user: api.user,
  };

  constructor (props) {
    super(props);
    api.onUserUpdate = user => this.setState({ user });
  }

  authHandler = () => {
    api.authorize()
      .then(user => this.setState({ user }));
  }

  runHandler = () => {
    let grab = Grabber.grab(this.state.parameters, this.state.resultString);
    Promise.all(this.state.links.split('\n').map(link => api.fetch(link)))
      .then(result => result.map(text => grab(text)).join('\n'))
      .then(result => this.setState({ result }));
  }

  changeHandler = name => event => {
    this.setState({ [name]: event.target.value });
  }

  parameterChangeHandler = (id, name) => (event, value) => {
    this.setState((state, props) => {
      state.parameters[id][name] = value;
      return state;
    });
  }

  parameterFlagHandler = (id, flag) => (event, value) => {
    this.setState((state, props) => {
      state.parameters[id].flags[flag] = value;
      return state;
    });
  }

  parameterDeleteHandler = (id) => () => {
    this.setState((state, props) => {
      state.parameters.splice(id, 1);
      return state;
    });
  }

  addParameterHandler = () => {
    this.setState((state, props) => {
      state.parameters.push(new Parameter('Parameter', ''));
      return state;
    });
  }

  render() {

    const { classes } = this.props,
      { links, parameters, resultString, user, result } = this.state;

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
          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Result string"
                value={resultString}
                onChange={this.changeHandler('resultString')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Links"
                fullWidth
                multiline
                rows={28}
                variant="outlined"
                value={links}
                onChange={this.changeHandler('links')}
              />
            </Grid>
            <Grid item xs={8}>
              {parameters.map((parameter, index) => (
                <Paper className={classes.paper} elevation={1}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <div className={classes.variableBar}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          value={parameter.name}
                          onChange={this.parameterChangeHandler(index, 'name')}
                        />
                        <IconButton className={classes.button} onClick={this.parameterDeleteHandler(index)}>
                          <DeleteIcon className={classes.icon}/>
                        </IconButton>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={classes.variableBar}>
                        <TextField
                          fullWidth
                          label="Pattern"
                          variant="outlined"
                          value={parameter.pattern}
                          onChange={this.parameterChangeHandler(index, 'pattern')}
                        />
                        <FormGroup row style={{ marginLeft: 30, minWidth: 180 }}>
                          {Object.keys(parameter.flags).map(key => (
                            <FormControlLabel control={
                              <Checkbox value={key} checked={parameter.flags[key]} onChange={this.parameterFlagHandler(index, key)} />
                            } label={key} />
                          ))}
                        </FormGroup>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Button color="primary" className={classes.button} onClick={this.runHandler} >
                Run
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button className={classes.button} onClick={this.addParameterHandler} >
                Add
              </Button>
            </Grid>
            { result.length > 0 &&
              <Grid item xs={12}>
                <TextField
                  label="Result"
                  fullWidth
                  multiline
                  rows={result.split('\n').length}
                  variant="outlined"
                  value={result}
                />
              </Grid>
            }
          </Grid>
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(App);
