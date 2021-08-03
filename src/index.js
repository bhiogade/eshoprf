import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Product from './components/product';
import Order from './components/createOrder';

ReactDOM.render(<Order />, document.getElementById('root')
);
