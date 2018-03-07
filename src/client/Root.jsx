import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './assets/css/main.scss';

import Header from './components/header';

import InputDestination from './views/inputDestination';

const Root = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <Router>
        <Route exact path="/" component={InputDestination} />
      </Router>
    </div>
  </MuiThemeProvider>
);

export default Root;
