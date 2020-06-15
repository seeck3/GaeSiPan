import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Container,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import TestBoard1 from '../Boards/TestBoard1/TestBoard1';
import TestBoard2 from '../Boards/TestBoard2/TestBoard2';
const useStyles = makeStyles({
  landing: {
    maxHeight: '95vh',
    padding: '20px',
  },
  paper: {
    height: '25rem',
  },
});
const Landing = () => {
  const classes = useStyles();
  return (
    <Container className={classes.landing} maxWidth='lg' fixed={true}>
      {/* This is Landing Page */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant='button'>Left-Side</Typography>
            <TestBoard1 />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant='button'>Right-Side</Typography>
            <TestBoard2 />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {/* <TestBoard1 /> */}
            Please Add the Lists
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {/* <TestBoard1 /> */}
            Please Add the Lists
          </Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid> */}
      </Grid>
    </Container>
  );
};

Landing.propTypes = {};

export default Landing;
