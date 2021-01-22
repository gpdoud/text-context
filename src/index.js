import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { ServiceContextProvider } from './serviceContextProvider';

ReactDOM.render(
  <ServiceContextProvider>
    <App />
  </ServiceContextProvider>
  , document.getElementById('root')
);
