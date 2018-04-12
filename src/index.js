import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './scenes/app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
require('typeface-raleway');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
