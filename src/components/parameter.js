import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import CheckLabel from './checkLabel';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flags: {
    marginLeft: 20,
    marginRight: 20,
    minWidth: 80
  }
};

export default withStyles(styles)(function ({ className, classes, value, onChange, onCheck, onRemove, onFocus, onBlur }) {
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
          onFocus={onFocus}
          onInput={onFocus}
          onBlur={onBlur}
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