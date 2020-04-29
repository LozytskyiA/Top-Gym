import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import testModel from './models/Test';
import { BrowserRouter as Router,} from "react-router-dom";

const test = testModel.create({
  currency: 'CAD',
  is_paid: false
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
