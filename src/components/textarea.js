import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ({ label, value, onChange }) {
  return (
    <TextField
      label={label}
      fullWidth
      multiline
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}