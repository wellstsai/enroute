import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import InputDestination from './views/inputDestination';

const Root = () => (
  <div>
    <header>header here</header>
    <Router>
      <Route exact path="/" component={InputDestination} />
    </Router>
  </div>
);

export default Root;
