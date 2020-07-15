import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

import(/*webpackChunkName: 'app' */ '@/App').then(({ default: App }) =>
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  )
);
