import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
    
  },
  collapserDesc: {
    color: 'blue'
  }
};

const getBegin = (text) => {
  let index = -1;
  let last = 0;
  let c = 0;
  do {
    last = index;
    index = text.indexOf('\n', index + 1);
    c++;
  } while (index !== -1 && c < 4 && index - last < 161);
  let end = c < 4 ? last + 160 : index;
  return text.slice(0, end);
};

const getEnd = (text) => {
  let index = text.length;
  let last = index;
  let c = 0;
  do {
    last = index;
    index = text.lastIndexOf('\n', index - 1);
    c++;
  } while(index !== -1 && c < 4 && last - index < 161);
  const from = c < 4 ? last - 160 : index;
  return text.slice(from, text.length);
};

export default withStyles(styles)(function Wrapper ({ classes, value, key }) {
  let text;
  if (value.length > 340) {
    const begin = getBegin(value);
    const end = getEnd(value);
    const middle = <div key={key + '_btn'} className={classes.collapserDesc}>Hidden part</div>;
    
    text = [begin, middle, end];
  } else {
    text = value;
  }
  return (
    <span className={classes.wrapper}>
      {text}
    </span>
  );
});
