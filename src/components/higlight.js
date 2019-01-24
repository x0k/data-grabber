import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const toLines = (text) => text.split('\n').map((el, id) => (<div key={id}>{el}</div>));

const match = (value, parameter) => new Promise((resolve, reject) => {
  const regexp = new RegExp(parameter.pattern, parameter.flagsToString());
  let matches = value.match(regexp);
  if (!matches) {
    reject({ error: 'No matches' });
  }
  matches = matches.map(el => ({ from: value.indexOf(el), length: el.length, element: el, inner: [] }));
  matches.sort((a, b) => (b.from + b.length) - (a.from + a.length));
  let i = matches.length - 1;
  while (i > 0) {
    let last = matches[i];
    let prev = matches[i-1];
    if (prev.from + prev.length >= last.from + last.length) {
      prev.inner.push(...matches.splice(i, 1));
    }
    i--;
  }
  resolve(matches);
});

const highlight = (value, matches, classes) => new Promise((resolve, reject) => {
  const hl = (match, lvl) => {
    let value = [ ];
    let text = match.element;
    for (let m of match.inner) {
      let [a, b] = text.split(m.element);
      value = [ ...value, a, hl(m, lvl+1) ];
      text = b;
    }
    if (text.length) {
      value.push(text);
    }
    return (<span className={classes[`hl-${lvl}`]}>
      {value.filter(el => Boolean(el))}
    </span>);
  };
  if (!matches) {
    reject({ error: 'No matches' });
  }
  resolve(hl({ inner: matches, element: value }, 0));
});

const styles = {
  container: {
    borderStyle: 'solid',
    border: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.23)',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    padding: '20px 14px',
    fontFamily: 'Roboto',
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 1)',
    }
  }
};

for (let i = 1; i < 10; i++) {
  styles[`hl-${i}`] = {
    background: `hsl(${(1-i/5)*120}, 100%, 50%)`,
    padding: 2,
  };
}

class Highlight extends Component {

  state = {
    status: null,
    lastRegExp: ''
  }

  render () {
    const { value, parameter, classes } = this.props;
    const { status, lastRegExp } = this.state;
    const regExp = parameter.pattern + parameter.flagsToString();
    if (lastRegExp !== regExp) {
      match(value, parameter)
        .then(matches => highlight(value, matches, classes))
        .then(status => this.setState({ status, lastRegExp: regExp }))
        .catch(({ error }) => this.setState({ status: error, lastRegExp: regExp }));
    }
    return (
      <div className={classes.container}>
        {status ? status : toLines(value)}
      </div>
    );
  }

} 

export default withStyles(styles)(Highlight);
