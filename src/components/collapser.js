import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  collapser: {
    
  },
  collapserDesc: {
    color: 'blue'
  }
};

export default withStyles(styles)(function Collapser ({ classes, value, key }) {
  let text;
  const lines = value.split('\n');
  const len = lines.length;
  if (len > 10) {
    const begin = lines.slice(0, 4).join('\n');
    const middle = <div key={key + '_btn'} className={classes.collapserDesc}>{len - 6} hidden lines</div>;
    const end = lines.slice(len - 4, len).join('\n');
    text = [begin, middle, end];
  } else {
    text = value;
  }
  return (
    <span className={classes.collapser}>
      {text}
    </span>
  );
});
