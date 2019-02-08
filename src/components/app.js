import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { withStyles } from '@material-ui/core/styles';

import Bar from './bar';
import Textarea from './textarea';
import Parameter from './parameter';
import Outlined from './outlined';
import Highlight from './highlight';

import API from '../assets/api';
import ParameterData from '../assets/parameterData';
import { grab } from '../assets/grabber';

const styles = {
  root: {
    flexGrow: 1,
  },
  wrapper: {
    width: '90%',
    margin: '0 auto',
  },
  container: {
    padding: 20
  },
  button: {
    marginRight: 20,
  },
  progress: {
    margin: '10 auto'
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
        flags: { s: true }
      }),
      new ParameterData({
        name: 'Links',
        pattern: '<a.+?href="(http.+?)".*?>([^<>]+?)<\\/a>',
        item: '<li>$2: <a href="$1">$1</a></li>',
        flags: { g: true }
      })
    ],
    test: {
      text: null,
      parameter: null,
    },
    status: 'none',
    container: '<b>%Title%</b><br><ul>%Links%</ul>',
    result: [],
    user: null,
    anchor: null,
    api: new API(status => this.setState({
      user: status ? this.state.api.user.getBasicProfile() : null,
      anchor: null,
    }))
  };

  menuHandler = action => event => {
    this.setState({ anchor: action ? event.currentTarget : null });
  };

  authHandler = () => {
    this.state.api.authorize();
  }

  linksChangeHandler = (event) => this.setState({ links: event.target.value });

  containerChangeHandler = (event) => this.setState({ container: event.target.value });

  startLoading = () => new Promise(resolve => this.setState({ status: 'loading' }, resolve));

  runHandler = () => {
    const { parameters, container, links } = this.state;
    const fetch = (url) => this.state.api.fetch(url);
    const linksArray = links.split('\n');
    this.startLoading()
      .then(() => grab(fetch, linksArray, parameters, container))
      .then(result => this.setState({ status: 'show', result }));
  }

  parameterChangeHandler = id => name => event => {
    let value = event.target.value;
    this.setState(({ parameters }) => {
      parameters[id][name] = value;
      return { parameters };
    });
  }
  
  parameterCheckHandler = id => key => (event, value) => {
    this.setState(({ parameters }) => {
      parameters[id].flags[key] = value;
      return { parameters };
    });
  }

  parameterDeleteHandler = (id) => () => {
    this.setState(({ parameters }) => {
      parameters.splice(id, 1);
      return { parameters };
    });
  }

  parameterAddHandler = () => {
    this.setState(({ parameters }) => {
      parameters.push(new ParameterData({}));
      return { parameters };
    });
  }

  parameterTestHandler = (id) => () => {
    const { links, parameters } = this.state;
    const parameter = parameters[id];
    if (links.length === 0) {
      this.setState({
        status: 'test',
        test: {
          text: 'No links',
          parameter: parameter
        }
      });
    }
    const link = links.split('\n')[0];
    this.startLoading()
      .then(() => this.state.api.fetch(link))
      .then(response => response.result.response.result)
      .then(text => this.setState({ status: 'test', test: { text, parameter } }));
  }

  render() {

    const { classes } = this.props;
    const { links, parameters, container, user, result, anchor, status, test } = this.state;

    return (
      <div className={classes.root}>
        <Bar
          anchor={anchor}
          user={user}
          authHandler={this.authHandler}
          menuHandler={this.menuHandler}
        />
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.wrapper}>
              <div className={classes.container}>
                <Textarea
                  label="Links"
                  value={links}
                  onChange={this.linksChangeHandler}
                />
              </div>
              <div className={classes.container}>
                <Button variant="outlined" color="primary" className={classes.button} onClick={this.runHandler} disabled={!user}>
                  Run
                </Button>
                <Button variant="outlined" className={classes.button} onClick={this.parameterAddHandler}>
                  Add
                </Button>
              </div>
              {parameters.map((parameter, index) => (
                <Parameter
                  key={index}
                  className={classes.container}
                  value={parameter}
                  onChange={this.parameterChangeHandler(index)}
                  onCheck={this.parameterCheckHandler(index)}
                  onRemove={this.parameterDeleteHandler(index)}
                  onTest={this.parameterTestHandler(index)}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.wrapper}>
              <div className={classes.container}>
                <Textarea
                  label="Items container"
                  value={container}
                  onChange={this.containerChangeHandler}
                />
              </div>
              {status === 'test' &&
                <div className={classes.container}>
                  <Outlined>
                    <Highlight
                      parameter={test.parameter}
                      value={test.text}
                    />
                  </Outlined>
                </div>
              }
              {status === 'show' && result.length > 0 && result.map((element, index) =>
                <div key={index} className={classes.container} >
                  <Outlined>
                    <div dangerouslySetInnerHTML={{__html: element}}></div>
                  </Outlined>
                </div>
              )}
              {status === 'loading' &&
                <div className={classes.container}>
                  <Outlined>
                    <LinearProgress />
                  </Outlined>
                </div>
              }
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(App);
