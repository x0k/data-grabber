import React from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import local from '../assets/local.svg';
import drive from '../assets/google-drive.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  },
  icon: {
    width: theme.spacing.unit * 18,
  }
});

function FileDialog ({ classes, open, onClose, onLocalClick, onDriveClick }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Grid container className={classes.paper}>
        <Grid item xs={6} onClick={onLocalClick} style={{ filter: onLocalClick ? 'none' : 'grayscale(100%)' }}>
          <img
            className={classes.icon}
            src={local}
            alt="Local"
          />
          <Typography variant="subtitle1">
          Local
          </Typography>
        </Grid>
        <Grid item xs={6} onClick={onDriveClick} style={{ filter: onDriveClick ? 'none' : 'grayscale(100%)' }}>
          <img
            className={classes.icon}
            src={drive}
            alt="Google Drive"
          />
          <Typography variant="subtitle1">
          Google Drive
          </Typography>
        </Grid>
      </Grid>
    </Modal>
  );
}

const WrappedFileDialog = withStyles(styles)(FileDialog);

export default WrappedFileDialog;
