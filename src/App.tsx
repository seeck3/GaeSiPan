import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Typography, AppBar } from '@material-ui/core';
import Landing from './Components/Landing/Landing';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Landing />
    </div>
  );
}

export default App;
