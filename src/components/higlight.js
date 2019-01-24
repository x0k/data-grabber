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
      a = a.split('\n');
      if (a.length > 1) {
        a = a.map(el => (<div>{el}</div>));
      }
      value = [ ...value, ...a, hl(m, lvl+1) ];
      text = b;
    }
    if (text.length) {
      let splitted = text.split('\n');
      if (splitted.length > 1) {
        value.push(...splitted.map(el => (<div>{el}</div>)));
      } else {
        value.push(text);
      }
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
};

for (let i = 1; i < 10; i++) {
  styles[`hl-${i}`] = {
    background: `hsl(${(1-i/5)*120}, 100%, 50%)`
  };
}

class Highlight extends Component {

  state = {
    status: null,
    lastRegExp: ''
  }

  render () {
    const { className, value, parameter, classes } = this.props;
    const { status, lastRegExp } = this.state;
    const regExp = parameter.pattern + parameter.flagsToString();
    if (lastRegExp !== regExp) {
      match(value, parameter)
        .then(matches => highlight(value, matches, classes))
        .then(status => this.setState({ status, lastRegExp: regExp }))
        .catch(({ error }) => this.setState({ status: error, lastRegExp: regExp }));
    }
    return (
      <div className={className}>
        {status ? status : toLines(value)}
      </div>
    );
  }

}

export default withStyles(styles)(Highlight);
