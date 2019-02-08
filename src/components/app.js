import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { withStyles } from '@material-ui/core/styles';

import Bar from './bar';
import Textarea from './textarea';
import Parameter from './parameter';
import Outlined from './outlined';
import Highlight from './highlight';
import { setAnchor, setUser } from '../actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  wrapper: {
    width: '90%',
    margin: '0 auto',
  },
  container: {
    padding: 20
  },
  button: {
    marginRight: 20,
  },
  progress: {
    margin: '10 auto'
  }
};

export default withStyles(styles)(function App ({
  classes,
  api,
  links,
  parameters,
  container,
  user,
  result,
  anchor,
  status,
  test,
  authHandler,
  menuHandler,
  linksChangeHandler,
  parameterCheckHandler,
  parameterDeleteHandler,
  parameterTestHandler,
  runHandler,
  parameterAddHandler,
  containerChangeHandler,
  parameterNameHandler,
  parameterPatternHandler,
  parameterItemHandler,
  authorize,
}) {
  if (!api) {
    authorize();
  }
  return (
    <div className={classes.root}>
      <Bar
        anchor={anchor}
        user={user}
        authHandler={authHandler}
        menuHandler={menuHandler}
      />
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div className={classes.wrapper}>
            <div className={classes.container}>
              <Textarea
                label="Links"
                value={links}
                onChange={linksChangeHandler}
              />
            </div>
            <div className={classes.container}>
              <Button variant="outlined" color="primary" className={classes.button} onClick={runHandler} disabled={!user}>
                Run
              </Button>
              <Button variant="outlined" className={classes.button} onClick={parameterAddHandler}>
                Add
              </Button>
            </div>
            {parameters.map((parameter, index) => (
              <Parameter
                key={index}
                className={classes.container}
                value={parameter}
                onNameChange={parameterNameHandler(index)}
                onPatternChange={parameterPatternHandler(index)}
                onItemChange={parameterItemHandler(index)}
                onCheck={parameterCheckHandler(index)}
                onRemove={parameterDeleteHandler(index)}
                onTest={parameterTestHandler(index)}
              />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.wrapper}>
            <div className={classes.container}>
              <Textarea
                label="Items container"
                value={container}
                onChange={containerChangeHandler}
              />
            </div>
            {status !== 'none' &&
              <div className={classes.container}>
                <Outlined>
                  {status === 'show' && result.length > 0 &&
                    result.map((element, index) => <div key={index} dangerouslySetInnerHTML={{__html: element}}></div>)
                  }
                  {status === 'test' && <Highlight
                    parameter={test.parameter}
                    value={test.text}
                  />}
                  {status === 'loading' && <LinearProgress />}
                </Outlined>
              </div>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
});
