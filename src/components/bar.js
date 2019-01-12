import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  appBar: {
    
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    width: 34,
    height: 34
  },
};

export default withStyles(styles)(function ({ classes, anchor, user, authHandler, menuHandler }) {
  const open = Boolean(anchor);
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Data grabber
        </Typography>
        { user &&
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={menuHandler(true)}
              color="inherit"
            >
              <Avatar
                alt={user.getName()}
                src={user.getImageUrl()}
                className={classes.avatar}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={menuHandler(false)}
            >
              <MenuItem onClick={authHandler}>Logout</MenuItem>
            </Menu>
          </div>
        }
        {!user && <Button className={classes.button} color="inherit" onClick={authHandler} >Login</Button>}
      </Toolbar>
    </AppBar>
  );
});