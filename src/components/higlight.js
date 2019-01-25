import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const match = (value, parameter) => new Promise((resolve, reject) => {
  const regexp = new RegExp(parameter.pattern, parameter.flagsToString());
  let matches = value.match(regexp);
  if (!matches) {
    reject({ error: 'No matches' });
  }
  const performed = [];
  for (const match of matches) {
    let from = -1;
    const findp = el => el.from + el.len === from + match.length;
    do {
      from = value.indexOf(match, from + 1);
    } while (performed.find(findp) && from !== -1);
    if (from !== -1) {
      performed.push({ from, len: match.length, element: match, inner: [] });
    } else {
      throw new Error(`Cannot find ${match}`);
    }
  }
  matches = performed;
  matches.sort((a, b) => (a.from + a.len) - (b.from + b.len));
  let i = matches.length - 1;
  while (i > 0) {
    const curr = matches[i];
    const prev = matches[i - 1];
    if ((prev.from >= curr.from) && (prev.from + prev.len <= curr.from + curr.len)) {
      curr.inner.unshift(...matches.splice(--i, 1));
    } else {
      i--;
    }
  }
  resolve(matches);
});

const highlight = (value, matches, classes) => new Promise((resolve, reject) => {
  const hl = (match, lvl) => {
    let value = [ ];
    let text = match.element;
    for (const m of match.inner) {
      const [a, ...b] = text.split(m.element);
      value = [ ...value, a, hl(m, lvl+1) ];
      text = b.join('');
    }
    if (text.length) {
      value.push(text);
    }
    return (
      <span key={match.element} className={classes[`hl-${lvl}`]}>
        {value.filter(el => Boolean(el))}
      </span>
    );
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

for (let i = 1; i < 4; i++) {
  styles[`hl-${i}`] = {
    background: `hsl(${(1-i/4)*120}, 100%, 50%)`,
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
    const onError = ({ error }) => this.setState({ status: error, lastRegExp: regExp });
    if (lastRegExp !== regExp) {
      match(value, parameter)
        .then(matches => highlight(value, matches, classes))
        .catch(onError)
        .then(status => this.setState({ status, lastRegExp: regExp }))
        .catch(onError);
    }
    return (
      <div className={classes.container}>
        {status ? status : value}
      </div>
    );
  }

} 

export default withStyles(styles)(Highlight);
