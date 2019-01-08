import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Flags from './flags';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flags: {
    marginLeft: 30,
    minWidth: 180
  }
};

export default withStyles(styles)(function ({ className, classes, value, onChange, onCheck, onRemove }) {
  const { name, flags, pattern, item } = value;
  return (
    <div className={className}>
      <div className={classes.row}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChange('name')}
        />
        <Flags
          className={classes.flags}
          value={flags}
          onCheck={onCheck}
        />
        <Button variant="outlined" color="secondary" onClick={onRemove}>
          Remove
        </Button>
      </div>
      <div className={classes.row}>
        <TextField
          fullWidth
          variant="outlined"
          label="Pattern"
          value={pattern}
          onChange={onChange('pattern')}
        />
      </div>
      <div className={classes.row}>
        <TextField
          fullWidth
          variant="outlined"
          label="Item"
          value={item}
          onChange={onChange('item')}
        />
      </div>
    </div>
  );
});