import React from 'react';

import { withStyles } from '@material-ui/core/styles';

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

export default withStyles(styles)(function Outlined ({ classes, children }) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
});
