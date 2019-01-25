import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import CheckLabel from './checkLabel';

import { withStyles } from '@material-ui/core/styles';

const mw = 84;

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flags: {
    marginLeft: 20,
    minWidth: mw
  },
  btn: {
    marginLeft: 20,
    minWidth: mw,
  }
};

export default withStyles(styles)(function Parameter ({ className, classes, value, onChange, onCheck, onRemove, onTest }) {
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
        <FormGroup row className={classes.flags}>
          {Object.keys(flags).map(key => (
            <CheckLabel
              key={key}
              value={key}
              checked={flags[key]}
              onChange={onCheck(key)}
            >
              {key}
            </CheckLabel>
          ))}
        </FormGroup>
      </div>
      <div className={classes.row}>
        <TextField
          fullWidth
          variant="outlined"
          label="Pattern"
          value={pattern}
          onChange={onChange('pattern')}
        />
        <Button className={classes.btn} variant="outlined" onClick={onTest}>
          Test
        </Button>
      </div>
      <div className={classes.row}>
        <TextField
          fullWidth
          variant="outlined"
          label="Item"
          value={item}
          onChange={onChange('item')}
        />
        <Button className={classes.btn} variant="outlined" color="secondary" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
});