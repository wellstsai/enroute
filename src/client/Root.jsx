import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './assets/css/main.scss';

import Header from './components/header';

import InputDestination from './views/inputDestination';

class Root extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMPb2oDOb5A1Ckd_2jMj97QzAo1a_F89U&libraries=places';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Router>
            <Route exact path="/" component={InputDestination} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Root;
