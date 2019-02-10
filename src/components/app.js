import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { withStyles } from '@material-ui/core/styles';

import Bar from './bar';
import FileDialog from './fileDialog';
import Textarea from './textarea';
import Parameter from './parameter';
import Outlined from './outlined';
import Highlight from './highlight';

import { status as Status } from '../actions';

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

const saveLocal = (data, close) => () => {
  const fileName = 'data.json';
  const file = new Blob([JSON.stringify(data)], {
    type: 'application/json',
    name: fileName
  });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  close();
};

const selectLocal = () => new Promise((resolve, reject) => {
  const input = document.createElement('input');
  input.onchange = resolve;
  input.onabort = reject;
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'json|application/json');
  input.click();
});

const readLocal = (file) => new Promise((resolve, reject) => {
  if (file) {
    const reader = new FileReader();
    reader.onload = resolve;
    reader.onerror = reject;
    reader.readAsText(file);
  } else {
    reject({ error: 'File not selected' });
  }
});

const loadLocal = (load, close) => () => {
  selectLocal()
    .then(({ path }) => readLocal(path[0].files[0]))
    .then(e => {
      const lines = e.target.result;
      const data = JSON.parse(lines);
      load(data);
      close();
    });
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
  modal,
  openDialog,
  closeDialog,
  loadData
}) {
  if (!api) {
    authorize();
  }
  const state = {
    links,
    parameters,
    container,
    status: Status.none,
  };
  const openSaveDialog = openDialog(saveLocal(state, closeDialog), null);
  const openLoadDialog = openDialog(loadLocal(loadData, closeDialog), null);
  return (
    <div className={classes.root}>
      <Bar
        anchor={anchor}
        user={user}
        authHandler={authHandler}
        menuHandler={menuHandler}
      />
      <FileDialog open={modal.open} onClose={closeDialog} onLocalClick={modal.onLocal} onDriveClick={modal.onDrive} />
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
              <Button variant="outlined" className={classes.button} onClick={openSaveDialog}>
                Save
              </Button>
              <Button variant="outlined" className={classes.button} onClick={openLoadDialog}>
                Load
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
            {status !== Status.none &&
              <div className={classes.container}>
                <Outlined>
                  {status === Status.show && result.length > 0 &&
                    result.map((element, index) => <div key={index} dangerouslySetInnerHTML={{__html: element}}></div>)
                  }
                  {status === Status.test && <Highlight
                    parameter={parameters[test.parameter]}
                    value={test.text}
                  />}
                  {status === Status.loading && <LinearProgress />}
                </Outlined>
              </div>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
});
