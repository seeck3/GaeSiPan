import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { MOCKS } from '../TestBoard1/TestBoard1';
const TestBoard2 = () => {
  return (
    <div>
      <List component='nav' aria-label='secondary mailbox folders'>
        {MOCKS.map((list) => (
          <ListItem button>
            <ListItemText primary={list.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

TestBoard2.propTypes = {};

export default TestBoard2;
