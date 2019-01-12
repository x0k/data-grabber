import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import Bar from './bar';
import Textarea from './textarea';
import Parameter from './parameter';

import API from '../assets/api';
import ParameterData from '../assets/parameterData';
import Grabber from '../assets/grabber';

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
    anchorEl: null,
  };

  api = null;

  constructor (props) {
    super(props);
    this.api = new API(status => this.setState({
      user: status ? this.api.user.getBasicProfile() : null,
      anchorEl: null,
    }));
  }

  menuHandler = action => event => {
    this.setState({ anchorEl: action ? event.currentTarget : null });
  };

  authHandler = () => {
    this.api.authorize();
  }

  changeHandler = name => event => {
    this.setState({ [name]: event.target.value });
  }

  runHandler = () => {
    const { parameters, itemsContainer, links } = this.state;
    const fetch = this.api.fetch.bind(this.api);
    const linksArray = links.split('\n');
    Grabber.grab(fetch, linksArray, parameters, itemsContainer)
      .then(result => this.setState({ result }));
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

  render() {

    const { classes } = this.props;
    const { links, parameters, itemsContainer, user, result, anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <Bar
          anchor={anchorEl}
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
                  onChange={this.changeHandler('links')}
                />
              </div>
              {parameters.map((parameter, index) => (
                <Parameter
                  key={index}
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
                <Button variant="outlined" className={classes.button} onClick={this.parameterAddHandler} disabled={!user}>
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
            </div>
          </Grid>
          {result.length > 0 &&
            <Grid item xs={12} lg={6}>
              <div className={classes.wrapper}>
                {result.map((element, index) =>
                  <div key={index} className={classes.container} dangerouslySetInnerHTML={{__html: element}}></div>
                )}
              </div>
            </Grid>
          }
        </Grid>
      </div>
    );
  }

}

export default withStyles(styles)(App);
