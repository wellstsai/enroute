import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Load Global CSS
// import './assets/css/main.scss';

import Root from './Root';

injectTapEventPlugin();

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Root />,
  rootElement,
);
