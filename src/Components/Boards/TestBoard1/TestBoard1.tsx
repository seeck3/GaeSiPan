import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

export const MOCKS = [
  {
    title: 'Test 1111111',
    content: 'This is test content 1',
  },
  {
    title: 'Test 2',
    content: 'This is test content 1',
  },
  {
    title: 'Test 1',
    content: 'This is test content 1',
  },
  {
    title: 'Test 1',
    content: 'This is test content 1',
  },
  {
    title: 'Test 1',
    content: 'This is test content 1',
  },
];

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '15px',
  },
});

const TestBoard1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <TableContainer component={Paper}>
        <Table
          // className={classes.table}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              {/* <TableCell align='right'>Calories</TableCell>
              <TableCell align='right'>Fat&nbsp;(g)</TableCell>
              <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
              <TableCell align='right'>Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {MOCKS.map((list) => (
              <TableRow key={list.title}>
                <TableCell component='th' scope='row'>
                  {list.title}
                </TableCell>
                {/* <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {MOCKS.map((mock) => (
        <div>{mock.title}</div>
      ))} */}
    </div>
  );
};

TestBoard1.propTypes = {};

export default TestBoard1;
