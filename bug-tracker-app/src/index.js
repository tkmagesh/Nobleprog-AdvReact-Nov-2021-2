import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import Bugs from './bugs';
import Projects from './projects';
import store from './store'

import axios from 'axios';
window['axios'] = axios;

ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>Bug Tracker</h1>
        <hr/>
        <div className="row">
          <div className="projects">
            <Projects />
          </div>
          <div className="bugs">
            <Bugs/>
          </div>
        </div>
      </div>
    </Provider>
    , document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
