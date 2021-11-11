import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';
import bugActionCreators from './bugs/actions';
import store from './store'
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
      const bugs = store.getState();
    ReactDOM.render(
        <Bugs bugs={bugs} {...bugActionDispatchers}/>
        , document.getElementById("root")
    );
}
renderApp();
store.subscribe(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
