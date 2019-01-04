import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import API from '../assets/gapi';

const styles = theme => ({
  button: {

  }
});

class App extends Component {

  state = {
    link: 'https://reactjs.org'
  }

  clickHandler = () => {
    console.log(API);
  }

  changeHandler = name => (event, value) => {
    this.setState({ [name]: event.target.value });
  }

  render() {

    const { classes } = this.props,
      { link } = this.state;

    return (
      <div className="App">
        <TextField
          label="Link"
          fullWidth
          margin="normal"
          variant="outlined"
          value={link}
          onChange={this.changeHandler('link')}
        />
        <Button color="primary" className={classes.button} onClick={this.clickHandler} >
          Fetch
        </Button>
      </div>
    );
  }

}

export default withStyles(styles)(App);
