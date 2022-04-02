import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './Pages';
import { BrowserRouter } from "react-router-dom";

import './styles/index.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);