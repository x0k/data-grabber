import React from 'react';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  checkLabel: {
    margin: 5,
    fontSize: '1em',
    textTransform: 'uppercase',
    cursor: 'pointer'
  },
};

export default withStyles(styles)(function ({ classes, className, children, value, checked, onChange }) {
  const onClick = (event) => {
    if (checked) {
      onChange(event, false);
    } else {
      onChange(event, value);
    }
  };
  return (
    <Typography className={classes.checkLabel} onClick={onClick} style={{ color: checked ? '#f50057' : '#9e9e9e' }} >
      {children}
    </Typography>
  );
});