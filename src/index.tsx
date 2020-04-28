import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import testModel from './models/Test';

const test = testModel.create({
  currency: 'CAD',
  is_paid: false
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
