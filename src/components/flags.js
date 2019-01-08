import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ({ className, value, onCheck }) {
  return (
    <FormGroup row className={className}>
      {Object.keys(value).map(key => (
        <FormControlLabel
          key={key}
          label={key}
          control={
            <Checkbox
              value={key}
              checked={value[key]}
              onChange={onCheck(key)} />
          } />
      ))}
    </FormGroup>
  );
}