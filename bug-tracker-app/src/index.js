import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';

import bugActionCreators from './bugs/actions';
import Bugs from './bugs';

import projectActionCreators from './projects/actions';
import Projects from './projects';

import store from './store'


const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);

function renderApp(){
    //const bugs = store.getState();
    const projects = store.getState();
    ReactDOM.render(
        <div>
          <Projects projects={projects} {...projectActionDispatchers}/>
          {/* <Bugs bugs={bugs} {...bugActionDispatchers}/> */}
        </div>
        , document.getElementById("root")
    );
}
renderApp();
store.subscribe(renderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
