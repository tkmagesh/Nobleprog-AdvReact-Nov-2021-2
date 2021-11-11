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
    //const projects = store.getState();

    const storeState = store.getState();
    const bugs = storeState.bugsState;
    const projects = storeState.projectsState;

    ReactDOM.render(
        <div>
          <h1>Bug Tracker</h1>
          <hr/>
          <div className="row">
            <div className="projects">
              <Projects projects={projects} {...projectActionDispatchers}/>
            </div>
            <div className="bugs">
              <Bugs bugs={bugs} {...bugActionDispatchers}/>
            </div>
          </div>
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
